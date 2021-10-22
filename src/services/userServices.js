const User = require('../models/userModel/user')

const updateUser = async (user, id ) => {
    return User.updateMany({_id  : id}, {$set: user})
}

const deleteUser = async (id) => {
    return User.deleteMany({_id: id})
}

module.exports = { updateUser, deleteUser }