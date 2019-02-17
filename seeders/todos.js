import { User, Todo } from '../models';
import { times, random } from 'lodash';
import { randomSentence } from '../util';

export default async () => {
  const users = await User.findAll();
  users.forEach(user => {
    times(10, async () => {
      try {
        await Todo.create({
          UserId: user.id,
          title: randomSentence(),
          completed: random(1)
        });
      } catch (e) {
        throw e;
      }
    });
  });
};
