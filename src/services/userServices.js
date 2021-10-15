const User = require('../models/userModel/user')

const updateUser = async (user, id ) => {
    const patch = await User.updateMany({_id  : id}, {$set: user})
    try {
        return patch
    } catch (err) {
        return 'User failed to update'
    }
}

const deleteUser = async (id) => {
    const deleteUser = await User.deleteMany({_id: id})
    try {
        return deleteUser
    } catch (err) {
        return 'Failed to delete user'
    }
}

module.exports = { updateUser, deleteUser }