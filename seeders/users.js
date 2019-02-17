import { User } from '../models';
import { times, random } from 'lodash';
import { users } from '../data';

export default () => {
  users.forEach(user => {
    User.create(user);
  });
};
