const express = require('express')
const app = express()
const PORT = 8080

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/computer', (req, res) => {
    res.status(200).send({
        computer: 'Macbook Pro',
        model: '2021'
    })
})

app.post('/computer/:id', (req, res) => {
    const { id } = req.params
    const { model } = req.body

    if (!model) {
        res.status(418).send({ message: 'We need a model!'})
    }

    res.send({
        computer: `Macbook Pro with the ${model} and ID of ${id}`
    })
})