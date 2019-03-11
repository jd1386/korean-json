import { ApiStat } from '../models';

const resources = ['users', 'posts', 'todos', 'comments', 'albums'];

export default async () => {
  for (let resource of resources) {
    await ApiStat.create({
      resource
    });
  }
};
