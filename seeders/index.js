import userSeeder from './users';
import postSeeder from './posts';
import todoSeeder from './todos';
import commentSeeder from './comments';
import apiStatSeeder from './api_stats';

export default {
  firstGroup: () => Promise.all([userSeeder()]),
  secondGroup: () =>
    Promise.all([postSeeder(), todoSeeder(), commentSeeder(), apiStatSeeder()])
};
