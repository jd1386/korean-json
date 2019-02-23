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

router.post('/', (req, res) => {
  res.status(201).end(JSON.stringify(req.body, null, 2));
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  res.json(user);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  res.status(200).end(JSON.stringify(user, null, 2));
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  res.status(202).end(JSON.stringify(user, null, 2));
});

module.exports = router;
