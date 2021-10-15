const router = require('express').Router();
const { updateUser, deleteUser } = require('../../services/userServices')

// Update User
router.patch('/:id', async (req, res) => {
    const user = req.body
    const updatedUser = await updateUser(user, req.params.id)
    try {
        return res.status(200).json({updatedUser})
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

// Delete User
router.delete('/:id', async (req, res) => {
    const user = await deleteUser(req.params.id)
    try {
        return res.status(200).json({ message: 'User deleted successfully'})
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

module.exports = router