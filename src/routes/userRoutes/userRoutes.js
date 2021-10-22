const router = require('express').Router();
const { updateUser, deleteUser } = require('../../services/userServices')
const {updateValidation} = require("../../middleware/userValidation");

// Update User
router.patch('/:id', async (req, res) => {
    try {
        const user = req.body

        const validateBody = await updateValidation(req.body)
        if (validateBody) return res.status(400).json({ message: 'Failed to validate data.' })

        const updatedUser = await updateUser(user, req.params.id)
        return res.status(200).send({updatedUser, message: 'Update user!'})
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

// Delete User
router.delete('/:id', async (req, res) => {
    try {
        const user = await deleteUser(req.params.id)
        return res.status(200).send({ message: 'User deleted successfully'})
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

module.exports = router