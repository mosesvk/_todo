const express = require('express')
require('dotenv').config()
const port = process.env.PORT

const app = express() 

app.use(express.json())



app.listen(port, () => console.log(`App listening on PORT - ${port}`))