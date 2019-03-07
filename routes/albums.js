import express from 'express';
import apicache from 'apicache';
import { sequelize, User, Post, Todo, ApiStat, Album } from '../models';
import { ApiStatCounter } from '../util';

const router = express.Router();
const cache = apicache.middleware;

const updateApiStat = (req, res, next) => {
  // update ApiStat
  ApiStatCounter('albums');
  next();
};

router.use(updateApiStat);

router.get('/', cache('1 week'), async (req, res) => {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await User.findByPk(userId);
      const albums = await user.getAlbums();
      return res.json(albums);
    }

    const albums = await Album.findAll();
    res.json(albums);
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const album = await Album.findByPk(id);
  ApiStatCounter('albums');
  res.status(200).json(album);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const album = await Album.findByPk(id);
  ApiStatCounter('albums');
  res.status(200).json(album);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const album = await Album.findByPk(id);
  ApiStatCounter('albums');
  res.status(202).json(album);
});

module.exports = router;
