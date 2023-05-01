const {Client} = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5100,
    password: 'Solia7',
    database: 'todoapp'
})

client.connect();

client.query('Select * from users', (err, res)=> {
    if (!err) {
        console.log(res.rows)
    } else {
        console.log(err.message)
    }
})