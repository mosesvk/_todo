const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    user: '', 
    password: 'Solia7',
    host: 'localhost', 
    port: 5100,
    database: 'todoapp'
})