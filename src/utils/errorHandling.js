
const fourHundred = (message) => {
    return {message: message, code: 400}
}

const loginError = () => {
    return {
        message: 'Email was not found. Please register for an account.',
        code: 400
    }
}

const passwordError = () => {
    return {
        message: 'Email or Password was incorrect.',
        code: 400
    }
}



module.exports = {
    fourHundred,
    loginError,
    passwordError
}