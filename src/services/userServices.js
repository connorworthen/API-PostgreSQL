const User = require('../models/userModel/user')
const {saltedPassword} = require("../middleware/userValidation");

const updateUser = async (firstName, lastName, email, password, id) => {
        if (password) {
            const encrypted = await saltedPassword(password)
            return User.updateMany({_id: id}, {$set: {firstName: firstName, lastName: lastName, email: email, password: encrypted}})
        }
        return User.updateOne({_id: id}, {$set: {firstName: firstName, lastName: lastName, email: email}})
}

const deleteUser = async (id) => {
    return User.deleteMany({_id: id})
}

module.exports = { updateUser, deleteUser }