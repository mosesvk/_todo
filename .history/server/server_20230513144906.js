const express = require('express')
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')
const pool = require('./db')

const app = express() 

app.use(cors())
app.use(express.json())

app.get('/todos/:userEmail', async (req, res) => {

  const {email} = req.params

  try {
    const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [email])

    console.log(todos.rows)
  } catch (err) {
    console.error(err)
  }
})



app.listen(port, () => console.log(`App listening on PORT - ${port}`))