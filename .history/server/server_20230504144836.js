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
app.post('/todos', (req, res) => {
  const { user_email, title, progress, date } = req.body;
  console.log(req.body);
  const id = uuidv4();

  try {
    pool.query(
      `INSERT INTO todos(id, user_email, title, progress, date) VALUES($1, $2, $3, $4, $5),`,
      [id, user_email, title, progress, date],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).send(`What is going on!?`);
      }
    );
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => console.log(`SERVER is running on PORT ${PORT}`));
