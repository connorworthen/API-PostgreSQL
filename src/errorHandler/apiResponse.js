class ApiResponse {
    constructor(code, message) {
        this.code = code
        this.message = message
    }

    static getResponse() {
        return {
            message: '200 Response.',
            code: 200
        }
    }
}

module.exports = ApiResponse