
const fourHundred = (message) => {
    return {error: message, code: 400}
}

const registerError = () => {
    return {
        error: 'One or more of the validations was not met. Failed to register account.',
        code: 400
    }
}

const loginError = () => {
    return {
        error: 'Email or Password failed. Failed to login.',
        code: 400
    }
}

const passwordError = () => {
    return {
        error: 'Email or Password was incorrect.',
        code: 400
    }
}

const fiveHundred = () => {
    return {
        error: 'Internal Server Error',
        code: 500
    }
}





module.exports = {
    fourHundred,
    passwordError,
    fiveHundred,
    registerError,
    loginError
}