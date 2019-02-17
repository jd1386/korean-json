import { User, Post } from '../models';
import { times, random } from 'lodash';
import { sentences } from '../data';

export default async () => {
  const users = await User.findAll();
  users.forEach(user => {
    times(5, () => {
      try {
        Post.create({
          UserId: user.id,
          title: sentences[random(0, sentences.length - 1)],
          content: sentences[random(0, sentences.length - 1)]
        });
      } catch (e) {
        throw e;
      }
    });
  });
};
