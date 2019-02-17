import userSeeder from './users';
import postSeeder from './posts';

module.exports = {
  firstGroup: () => Promise.all([userSeeder()]),
  secondGroup: () => Promise.all([postSeeder()])
};
