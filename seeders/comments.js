import { User, Post, Comment } from '../models';
import { times, random } from 'lodash';
import { randomSentence } from '../util';

export default async () => {
  const users = await User.findAll();
  const posts = await Post.findAll();

  posts.forEach(post => {
    users.forEach(async user => {
      try {
        await Comment.create({
          content: randomSentence(2),
          UserId: user.id,
          PostId: post.id
        });
      } catch (e) {
        throw e;
      }
    });
  });
};
