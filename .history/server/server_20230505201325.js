// const {Client} = require('pg')
const PORT = process.env.PORT || 8000;
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const pool = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

// get all todos
app.get('/todos/:userEmail', async (req, res) => {
  //   console.log(req);
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
app.post('/todos', async (req, res) => {
  const { user_email, title, progress, date } = req.body.data;
  const id = uuidv4();

  console.log(user_email);

  try {
    const newTodo = await pool.query(
      'INSERT INTO todos(id, user_email, title, progress, date) VALUES($1, $2, $3, $4, $5)',
      [id, user_email, title, progress, date]
    );

    res.json(newTodo);
  } catch (err) {
    console.error(err);
  }
});

// edit a todo
app.put('/todos/:id', async (req, res) => {

  const {id} = req.params
  const {title, progress, user_email} = req.body.data

  try {
    const updatedTodo = await pool.query('UPDATE todos SET title = $1, progress = $2 WHERE userEmail = $3 AND id = $4', [])
  } catch (err) {
    console.error(err)
  }
})

app.listen(PORT, () => console.log(`SERVER is running on PORT ${PORT}`));
