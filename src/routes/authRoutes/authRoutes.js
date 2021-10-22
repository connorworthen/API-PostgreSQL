const router = require('express').Router();
const { registerValidation, loginValidation } = require('../../middleware/userValidation');
const { registerService, newInstanceAuth } = require('../../services/authService');
const { passwordCheck, jwtToken} = require('../../utils/utils')
const {registerError, fiveHundred} = require("../../utils/errorHandling");

// Register Route
router.post('/new', async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body

        const validateBody = await registerValidation(req.body)
        const emailCheck = await registerService(email)

        if (validateBody || emailCheck) {
            return res.send(registerError())
        } {
            const user = await newInstanceAuth(firstName, lastName, email, password)
            return res.status(201).send({ user: user._id, message: 'Success! User account created.'})
        }
    } catch (e) {
        return res.send(fiveHundred())
    }
})

// Login
router.post('/', async (req, res) => {
        try {
            const {email, password} = req.body

            const validateBody = await loginValidation(req.body)
            const emailExist = await registerService(email)
            const validPassword = emailExist? await passwordCheck(password, emailExist.password) : null

            if (validateBody || validPassword || emailExist) {
                return res.status(400).send('Email or Password failed')
            } {
                const token = await jwtToken(req.params.id)
                return res.status(201).send({ token, message: 'Success!'})
            }
        } catch (e) {
            return res.send(fiveHundred())
        }
})

module.exports = router