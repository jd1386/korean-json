import { ApiStat } from '../models';

const resources = ['users', 'posts', 'todos', 'comments'];

export default async () => {
  for (let resource of resources) {
    await ApiStat.create({
      resource
    });
  }
};
