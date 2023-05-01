// const {Client} = require('pg')
const PORT = process.env.PORT || 8000
const express = require('express')

const pool = require('./db')

const app = express()

// get all todos
app.get('/todos', async (req, res) => {
    try {
        const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1')
        res.json(todos.rows)
    } catch (err) {
        console.error(err)
    }
})

app.listen(PORT, () => console.log(`SERVER is running on PORT ${PORT}`))