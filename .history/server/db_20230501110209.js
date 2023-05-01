const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    user: process.env.USERNAME, 
    password: 'Solia7',
    host: 'localhost', 
    port: 5100,
    database: 'todoapp'
})

module.exports = pool