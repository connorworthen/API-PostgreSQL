const router = require('express').Router();
const { registerValidation, loginValidation } = require('../../middleware/userValidation');
const { registerService, newInstanceAuth, jwtAuth  } = require('../../services/authService');
const { passwordCheck } = require('../../utils/utils')
const User = require('../../models/userModel/user');

// Register Route
router.post('/account', async (req, res) => {
    const {firstName, lastName, email, password} = req.body
    const validation = await registerValidation(req.body)
    const emailCheck = await registerService(email)
    if (validation.error || emailCheck) {
        return res.status(400).send('Failed to Register Account')
    } else {
        const user = await newInstanceAuth(firstName, lastName, email, password)
        return res.send({ user: user._id, message: 'Success! User account created.'})
    }
})


// Login
router.post('/', async (req, res) => {
    const {email, password} = req.body
    const validation = await loginValidation(req.body)
    const emailCheck = await registerService(email)
    const user = await User.findOne({email})
    const validPassword = await passwordCheck(password, user.password)
    if (validation.error || !emailCheck || !validPassword) {
        return res.status(400).send('Login Failed')
    } else {
        const token = await jwtAuth(email)
        return res.status(201).send({token})
    }
})

module.exports = router