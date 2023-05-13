const express = require('express')
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')

const app = express() 

app.use(express.json())
app.use(cors())

app.get('/todos/:userEmail', (req, res) => {

  try {
    
  } catch (err) {
    console.error(err)
  }
})



app.listen(port, () => console.log(`App listening on PORT - ${port}`))