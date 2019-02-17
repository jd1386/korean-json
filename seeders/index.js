import userSeeder from './users';
import postSeeder from './posts';
import todoSeeder from './todos';
import commentSeeder from './comments';

export default {
  firstGroup: () => Promise.all([userSeeder()]),
  secondGroup: () => Promise.all([postSeeder(), todoSeeder(), commentSeeder()])
};
