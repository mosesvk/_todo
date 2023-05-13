const express = require('express')
const port = process.env.PORT


const app = express() 

app.listen(8000, () => console.log(`App listening on PORT 8000`))