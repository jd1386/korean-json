import userSeeder from './users';
import postSeeder from './posts';

export default {
  firstGroup: () => Promise.all([userSeeder()]),
  secondGroup: () => Promise.all([postSeeder()])
};
