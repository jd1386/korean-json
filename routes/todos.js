import express from 'express';
import apicache from 'apicache';
import { sequelize, User, Post, Todo, ApiStat } from '../models';
import { ApiStatCounter } from '../util';

const router = express.Router();
const cache = apicache.middleware;

const updateApiStat = (req, res, next) => {
  // update ApiStat
  ApiStatCounter('todos');
  next();
};

router.use(updateApiStat);

router.get('/', cache('1 week'), async (req, res) => {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await User.findByPk(userId);
      const todos = await user.getTodos();
      return res.json(todos);
    }

    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', (req, res) => {
  res.status(201).json(req.body);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByPk(id);
  ApiStatCounter('todos');
  res.status(200).json(todo);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByPk(id);
  ApiStatCounter('todos');
  res.status(200).json(todo);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByPk(id);
  ApiStatCounter('todos');
  res.status(202).json(todo);
});

module.exports = router;
