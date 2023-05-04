// const {Client} = require('pg')
const PORT = process.env.PORT || 8000;
const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();

app.use(cors());

// get all todos
app.get('/todos/:userEmail', async (req, res) => {
  console.log(req);
  const { userEmail } = req.params;

  try {
    const todos = await pool.query(
      'SELECT * FROM todos WHERE user_email = $1',
      [userEmail]
    );
    res.json(todos.rows);
  } catch (err) {
    console.error(err);
  }
});

// create a todo
app.post('/todos=', (req, res) => {

    const {user_email} = req.params

    try {
        pool.query(`INSERT INTO todos(id, user_email, title, progress, date) VALUES($1, $2, $3, $4, $5),`, [id, user_email, title, progress, date])
    } catch (err) {
        console.error(err)
    }
})

app.listen(PORT, () => console.log(`SERVER is running on PORT ${PORT}`));
