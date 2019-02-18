import express from 'express';
import { sequelize, User, Post, Todo, ApiStat } from '../models';
import { ApiStatCounter } from '../util';

const router = express.Router();

router.get(
  '/',
  async (req, res, next) => {
    await ApiStatCounter('todos');
    next();
  },
  async (req, res) => {
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
  }
);

router.get(
  '/:id',
  async (req, res, next) => {
    await ApiStatCounter('todos');
    next();
  },
  async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findByPk(id);
    res.json(todo);
  }
);

module.exports = router;
