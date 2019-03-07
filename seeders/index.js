import userSeeder from './users';
import postSeeder from './posts';
import todoSeeder from './todos';
import commentSeeder from './comments';
import albumSeeder from './albums';
import apiStatSeeder from './api_stats';

export default {
  firstGroup: () => Promise.all([userSeeder()]),
  secondGroup: () => Promise.all([postSeeder(), todoSeeder(), albumSeeder()]),
  thirdGroup: () => Promise.all([commentSeeder(), apiStatSeeder()])
};
