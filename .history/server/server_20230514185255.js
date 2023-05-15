const express = require('express');
require('dotenv').config();
const port = process.env.PORT;
const cors = require('cors');
const pool = require('./db');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/todos/:userEmail', async (req, res) => {

  const email = 'test@test.com'

  try {
    const todos = await pool.query(
      'SELECT * FROM todos WHERE user_email = $1',
      [email]
    );


    res.json(todos.rows)
  } catch (err) {
    console.error(err);
  }
});

app.post('/todos', async (req, res) => {
  const id = uuidv4()


  const {user_email, title, progress, date} = req.body.data

  try {
    const newTodo = await pool.query('INSERT INTO todos(id, title, progress, user_email, date) VALUES($1, $2, $3, $4, $5)', [id, title, progress, user_email, date])

    console.log(newTodo)
    res.json(newTodo)
  } catch (err) {
    console.error(err)
  }
})

app.put('/todos/:id', async (req, res) => {

  const {id, user_email, title, progress} = req.body.data

  console.log(req.body.data)
  try {
    const updatedTodo = await pool.query('UPDATE todos SET title = $1, progress = $2, user_email = $3 WHERE id = $4', [title, progress, user_email, id])

    res.json(updatedTodo)
  } catch (err) {
    console.error(err)
  }
})

app.listen(port, () => console.log(`App listening on PORT - ${port}`));
