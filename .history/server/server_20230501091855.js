// const {Client} = require('pg')
const PORT = process.env.PORT ?? 8000
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('hello MO')
})

app.listen(PORT, () => console.log(`SERVER is running on PORT ${PORT}`))