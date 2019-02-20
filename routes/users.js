import express from 'express';
import apicache from 'apicache';
import { sequelize, User, ApiStat } from '../models';
import { ApiStatCounter } from '../util';

const router = express.Router();
const cache = apicache.middleware;

const updateApiStat = (req, res, next) => {
  // update ApiStat
  ApiStatCounter('users');
  next();
};

router.use(updateApiStat);

router.get('/', cache('1 week'), async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  res.json(user);
});

router.post('/', (req, res) => {
  res.status(201).send('OK');
});

router.delete('/', (req, res) => {
  res.status(202).send('OK');
});

module.exports = router;
