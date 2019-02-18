import { times, random } from 'lodash';
import { sentences } from '../data';
import { ApiStat } from '../models';

const randomSentence = (lineNum = 1) => {
  let sentenceGenerated = [];

  times(lineNum, () => {
    sentenceGenerated.push(sentences[random(sentences.length - 1)]);
  });

  return sentenceGenerated.join(' ');
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

export { randomSentence, ApiStatCounter };
