import express from 'express';
import { sequelize, User, Post, Todo, Comment, ApiStat } from '../models';
import { ApiStatCounter } from '../util';

const router = express.Router();

router.get(
  '/',
  async (req, res, next) => {
    await ApiStatCounter('comments');
    next();
  },
  async (req, res) => {
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
  }
);

module.exports = router;
