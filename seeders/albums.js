import { User, Album } from '../models';
import { randomSentence } from '../util';

export default async () => {
  const users = await User.findAll();

  for (let user of users) {
    for (let i = 0; i < 20; i++) {
      try {
        await Album.create({
          UserId: user.id,
          title: randomSentence()
        });
      } catch (e) {
        throw e;
      }
    }
  }
};
