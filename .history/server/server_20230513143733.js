const express = require('express')
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')
const pool = require('./db')

const app = express() 

app.use(express.json())
app.use(cors())

app.get('/todos/:userEmail', async (req, res) => {

  const {email} = req.params

  try {
    await pool.query('SELECT * FROM todos WHERE email = $1', [email])
  } catch (err) { WHERE email = $1', [email]    console.error(err)
  }
})



app.listen(port, () => console.log(`App listening on PORT - ${port}`))