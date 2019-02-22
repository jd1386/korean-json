import { User, Post, Comment } from '../models';
import { random } from 'lodash';
import { randomSentence } from '../util';

export default async () => {
  const users = await User.findAll();
  const posts = await Post.findAll();

  for (let user of users) {
    for (let i = 0; i < 20; i++) {
      try {
        await Comment.create({
          content: randomSentence(2),
          UserId: user.id,
          PostId: random(1, posts.length)
        });
      } catch (e) {
        throw e;
      }
    }
  }
};
