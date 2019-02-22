import { User } from '../models';
import { random } from 'lodash';
import { users } from '../data';

export default async () => {
  for (let user of users) {
    await User.create(user);
  }
};
