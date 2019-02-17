import userSeeder from './users';
import postSeeder from './posts';
import todoSeeder from './todos';

export default {
  firstGroup: () => Promise.all([userSeeder()]),
  secondGroup: () => Promise.all([postSeeder(), todoSeeder()])
};
