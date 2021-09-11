const express = require("express");
const { body, validationResult } = require("express-validator");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

const TODOS = [];

app.post("/todos", body("description").isLength({ min: 1 }), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  const { description } = req.body;
  const id = uuidv4();
  const completed = false;

  const todo = { id, description, completed };
  TODOS.push(todo);
  return res.status(201).send(todo);
});

app.get("/todos", (req, res) => {
  return res.status(200).send(TODOS);
});

app.patch("/todos", body("id").isLength({ min: 2 }), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  const { id } = req.body;
  const todos = TODOS.filter((todo) => todo.id === id);

  if (todos.length < 1) {
    return res.status(404).send({ errors: "Todo doesn't exist" });
  }

  const todo = todos[0];
  todo.completed = true;
  return res.status(200).send(todo);
});

app.delete("/todos", body("id").isLength({ min: 2 }), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  const { id } = req.body;
  const todos = TODOS.filter((todo) => todo.id === id);

  if (todos.length < 1) {
    return res.status(404).send({ errors: "Todo doesn't exist" });
  }

  const todo = todos[0];

  TODOS.forEach((todo, index) => {
    if (todo.id === id) {
      TODOS.splice(index, 1);
    }
  });
  return res.status(202).send(todo);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on PORT::${PORT}`);
});
