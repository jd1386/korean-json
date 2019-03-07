import { User } from '../models';
import { random } from 'lodash';
import { users } from '../data';

export default async () => {
  try {
    await User.bulkCreate(users);
  } catch (err) {
    console.log(err);
  }
};
