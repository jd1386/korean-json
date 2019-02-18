import { ApiStat } from '../models';

const resources = ['users', 'posts', 'todos', 'comments'];

export default () => {
  resources.forEach(resource => {
    ApiStat.create({
      resource
    });
  });
};
