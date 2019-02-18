import express from 'express';
import apicache from 'apicache';
import { sequelize, User, Post, ApiStat } from '../models';
import { ApiStatCounter } from '../util';

const router = express.Router();
const cache = apicache.middleware;

const updateApiStat = (req, res, next) => {
  // update ApiStat
  ApiStatCounter('posts');
  next();
};

router.use(updateApiStat);

router.get('/', cache('1 week'), async (req, res) => {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await User.findByPk(userId);
      const posts = await user.getPosts();
      return res.json(posts);
    }

    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByPk(id);
  ApiStatCounter('posts');
  res.json(post);
});

module.exports = router;
