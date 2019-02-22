import { User, Todo } from '../models';
import { random } from 'lodash';
import { randomSentence } from '../util';

export default async () => {
  const users = await User.findAll();

  for (let user of users) {
    for (let i = 0; i < 20; i++) {
      try {
        await Todo.create({
          UserId: user.id,
          title: randomSentence(),
          completed: random(1)
        });
      } catch (e) {
        throw e;
      }
    }
  }
};
