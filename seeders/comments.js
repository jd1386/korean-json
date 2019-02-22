import { User, Post, Comment } from '../models';
import { random } from 'lodash';
import { randomSentence } from '../util';

export default async () => {
  const users = await User.findAll();
  const posts = await Post.findAll();

  for (let post of posts) {
    for (let user of users) {
      try {
        await Comment.create({
          content: randomSentence(2),
          UserId: user.id,
          PostId: post.id
        });
      } catch (e) {
        throw e;
      }
    }
  }
};
