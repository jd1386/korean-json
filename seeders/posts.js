import { User, Post } from '../models';
import { times, random } from 'lodash';
import { randomSentence } from '../util';

export default async () => {
  const users = await User.findAll();
  users.forEach(user => {
    times(10, async () => {
      try {
        await Post.create({
          UserId: user.id,
          title: randomSentence(),
          content: randomSentence(5)
        });
      } catch (e) {
        throw e;
      }
    });
  });
};
