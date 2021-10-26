const router = require('express').Router();
const createError = require('http-errors');
const { updateUser, deleteUser } = require('../../services/userServices')
const {updateValidation} = require("../../middleware/userValidation");

// Update User
router.patch('/:id', async (req, res, next) => {
    try {
        const { firstName, lastName, email, password } = req.body

        const validateBody = await updateValidation(req.body)
        const updatedUser = !validateBody? await updateUser(firstName, lastName, email, password, req.params.id) : null

        if (!validateBody || updatedUser) {
            return res.status(200).send({updatedUser})
        }
        throw createError(400, 'Update failed validations')
    } catch (err) {
        next(err)
        return
    }
})

// Delete User
router.delete('/:id', async (req, res, next) => {
    try {
        const user = await deleteUser(req.params.id)

        if (user.deletedCount > 0) {
            return res.status(200).send({user})
        }
        throw createError(404, 'Update failed validations')
    } catch (err) {
        next(err)
        return
    }
})

module.exports = router