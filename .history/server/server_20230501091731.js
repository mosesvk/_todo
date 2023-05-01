// const {Client} = require('pg')
const PORT = process.env.PORT ?? 8000
const express = require('express')

const app = express()

app.get('/', (res, req) => {
    res.setEncoding('hello MO')
})

app.listen(PORT, () => console.log(`SERVER is running on PORT ${PORT}`))