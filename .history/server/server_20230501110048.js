// const {Client} = require('pg')
const PORT = process.env.PORT ?? 8000
const express = require('express')

const app = express()

// get all todos
app.get('/todos', async (req, res) => {


    try {

    } catch (err) {
        console.log(err)
    }
})

app.listen(PORT, () => console.log(`SERVER is running on PORT ${PORT}`))