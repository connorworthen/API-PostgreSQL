const router = require('express').Router();
const { updateUser, deleteUser } = require('../../services/userServices')
const {updateValidation} = require("../../middleware/userValidation");

// Update User
router.patch('/:id', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body

        const validateBody = await updateValidation(req.body)
        const updatedUser = !validateBody? await updateUser(firstName, lastName, email, password, req.params.id) : null

        if (!validateBody || updatedUser) {
            return res.status(200).send({message: 'Updated user!'})
        } else {
            return res.status(400).send({message: 'Failed user!'})
        }
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