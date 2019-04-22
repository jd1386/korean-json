import express from 'express';
import apicache from 'apicache';
import { ApiStatCounter, randomParagraph } from '../util';

const router = express.Router();
const cache = apicache.middleware;

const updateApiStat = (req, res, next) => {
  // update ApiStat
  ApiStatCounter('paragraphs');
  next();
};

router.use(updateApiStat);

router.get('/', async (req, res) => {
  try {
    const paragraph = randomParagraph();
    res.json(paragraph);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
