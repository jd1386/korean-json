import { times, random } from 'lodash';
import { sentences } from '../data';

const randomSentence = (lineNum = 1) => {
  let sentenceGenerated = [];

  times(lineNum, () => {
    sentenceGenerated.push(sentences[random(sentences.length - 1)]);
  });

  return sentenceGenerated.join(' ');
};

export { randomSentence };
