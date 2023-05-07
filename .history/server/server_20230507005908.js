// const {Client} = require('pg')
const PORT = process.env.PORT || 8000;
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const bcrypt = require('bcrypt');
const pool = require('./db');
const jwt = require('jsonwebtoken')

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
  const { id } = req.params;
  const { title, progress, user_email } = req.body.data;

  try {
    const updatedTodo = await pool.query(
      'UPDATE todos SET title = $1, progress = $2, user_email = $3 WHERE id = $4',
      [title, progress, user_email, id]
    );
    res.json(updatedTodo);
  } catch (err) {
    console.error(err);
  }
});

// delete a todo
app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTodo = pool.query('DELETE FROM public.todos WHERE ID = $1', [
      id
    ]);

    res.send(deletedTodo);
  } catch (err) {
    console.error(err);
  }
});

// signup
app.post('/signup', (req, res) => {
  const { email, password } = req.body.data;

  // hash passwords using bcrypt 
  const salt = bcrypt.genSaltSync(10)
  bcrypt.hashSync(password, salt)
  const hashedPassword = bcrypt.hashSync(password, salt)

  try {
    pool.query('INSERT INTO users (email, hashed_password) VALUES ($1, $2)', [email, hashedPassword])

    const token = jwt.sign({email}, 'secret', {expiresIn: '1hr'})


    console.log({email, token})
    res.json({email, token})
  } catch (err) {
    console.error(err);
    if (err) {
      res.json({detail: err.detail})
    }
  }
});

// login
app.post('/login', (req, res) => {
  const {email, password} = req.body.data

  try {
    
  } catch (err) {
    console.error(err)
  }
})

app.listen(PORT, () => console.log(`SERVER is running on PORT ${PORT}`));
