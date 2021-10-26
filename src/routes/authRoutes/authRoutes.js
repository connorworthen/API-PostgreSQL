const router = require('express').Router();
const { registerValidation, loginValidation } = require('../../middleware/userValidation');
const { registerService, newInstanceAuth } = require('../../services/authService');
const { passwordCheck, jwtToken} = require('../../utils/utils')
const createError = require('http-errors');

// Register Route
router.post('/new', async (req, res, next) => {
    try {
        const {firstName, lastName, email, password} = req.body

        const validateBody = await registerValidation(req.body)
        const emailCheck = await registerService(email)

        if (validateBody || emailCheck) {
            throw createError(400, 'Failed to Register')
        } else {
            const user = await newInstanceAuth(firstName, lastName, email, password)
            return res.status(201).send({ user: user._id})
        }
    } catch (err) {
        next(err)
        return
    }
})

// Login Route
router.post('/', async (req, res, next) => {
        try {
            const {email, password} = req.body

            const validateBody = await loginValidation(req.body)
            const emailExist = await registerService(email)
            const validPassword = emailExist? await passwordCheck(password, emailExist.password) : null

            if (validateBody && validPassword && emailExist) {
                const token = await jwtToken(req.params.id)
                return res.status(200).send({token})
            }
            throw createError(401, 'Email or Password not found')
        } catch (err) {
            next(err)
            return
        }
})

module.exports = router