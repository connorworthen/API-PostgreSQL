require('dotenv').config()
require('./src/config/database').connect()
require('http-errors')

const routes = require('./src/routes/index')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.use('/api', routes)

app.use((err, req, res) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message || 'Internal Service Error'
        }
    })
})

app.listen(port, () => console.log(`Server started on port: ${port}`))