import { times, random } from 'lodash';
import { sentences, paragraphs } from '../data';
import { ApiStat } from '../models';

const randomSentence = (lineNum = 1) => {
  let sentenceGenerated = [];

  times(lineNum, () => {
    sentenceGenerated.push(sentences[random(sentences.length - 1)]);
  });

  return sentenceGenerated.join(' ');
};

const randomParagraph = () => {
  return paragraphs[random(paragraphs.length - 1)];
};

const ApiStatCounter = async resource => {
  try {
    const counter = await ApiStat.findOne({ where: { resource } });
    counter.count += 1;
    await counter.save();
  } catch (e) {
    throw Error(e);
  }
};

const formatNumber = num =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export { randomSentence, randomParagraph, ApiStatCounter, formatNumber };
