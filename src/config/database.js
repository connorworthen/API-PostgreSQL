const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "rootUser",
    database: "postgres"
})
exports.connect = () => {
    client.connect()
        .then(() => {
            console.log("Connected to Database")
        })
        .catch((err) => {
            console.log("Connection failed. Please try again")
        })
}

