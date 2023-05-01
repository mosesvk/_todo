// const {Client} = require('pg')
const PORT = process.env.PORT || 8000
const express = require('express')
const cors = require('cors')
const pool = require('./db')

const app = express()

app.use(cors())

// get all todos
app.get('/todos/:userEmail', async (req, res) => {
    console.log(req)
    const userEmail = req.params

    try {
        const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [userEmail])
        res.json(todos.rows)
    } catch (err) {
        console.error(err)
    }
})

app.listen(PORT, () => console.log(`SERVER is running on PORT ${PORT}`))