const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../models/user')

// Getting all
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getUser, (req, res) => {
    res.json(res.user)
})

// Creating one
router.post('/', async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;

        if (!(email && password && first_name && last_name)) {
            res.status(400).send("Please try again. Fill in all inputs.")
        }

        encryptedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            first_name,
            last_name,
            email,
            password: encryptedPassword,
        })

        const token = jwt.sign({ user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            })
            user.token = token

            res.status(201).json(user)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
})

// Updating One
router.patch('/:id', getUser, async (req, res) => {
    // loop through to make faster
    if (req.body.first_name != null) {
        res.user.first_name  = req.body.first_name
    }
    if (req.body.last_name != null) {
        res.user.last_name = req.body.last_name
    }
    if (req.body.email != null) {
        res.user.email = req.body.email
    }
    if (req.body.password != null) {
        encryptedPassword = await bcrypt.hash(req.body.password, 10)
        res.user.password = encryptedPassword
    }
    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: 'Deleted User' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id)
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.user = user
    next()
}

module.exports = router