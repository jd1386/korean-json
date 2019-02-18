import express from 'express';
import apicache from 'apicache';
import { sequelize, User, Post, Todo, Comment, ApiStat } from '../models';
import { ApiStatCounter } from '../util';

const router = express.Router();
const cache = apicache.middleware;

const updateApiStat = (req, res, next) => {
  // update ApiStat
  ApiStatCounter('comments');
  next();
};

router.use(updateApiStat);

router.get('/', cache('1 week'), async (req, res) => {
  const comments = await Comment.findAll({
    include: [
      {
        model: User,
        attributes: ['name', 'username', 'email']
      },
      {
        model: Post
      }
    ],
    order: [['id', 'asc']]
  });
  res.json(comments);
});

module.exports = router;
