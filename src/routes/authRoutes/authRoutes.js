const router = require('express').Router();
const { registerValidation, loginValidation } = require('../../middleware/userValidation');
const { registerService, newInstanceAuth, jwtAuth } = require('../../services/authService');
const { passwordCheck } = require('../../utils/utils')

// Register Route
router.post('/new', async (req, res) => {
    const {firstName, lastName, email, password} = req.body
    const validation = await registerValidation(req.body)
    const emailCheck = await registerService(email)
    // sort through see if can break down to other files best practices
    if (validation.error || emailCheck) {
        return res.status(400).send('Failed to Register Account')
    } else {
        const user = await newInstanceAuth(firstName, lastName, email, password)
        if (user.code > 299) {
            return res.send({error: user})
       } else {
            return res.send({ user: user._id, message: 'Success! User account created.'})
        }
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
                const token = await jwtAuth(email)
                return res.status(201).send({token})
            }
        } catch (e) {
            return res.status(500).send('Internal Service Error')
        }
})

module.exports = router