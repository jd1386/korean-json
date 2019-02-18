import express from 'express';
import { sequelize, User, ApiStat } from '../models';
import { ApiStatCounter } from '../util';

const router = express.Router();

router.get(
  '/',
  async (req, res, next) => {
    await ApiStatCounter('users');
    next();
  },
  async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  }
);

router.get(
  '/:id',
  async (req, res, next) => {
    await ApiStatCounter('users');
    next();
  },
  async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    res.json(user);
  }
);

module.exports = router;
