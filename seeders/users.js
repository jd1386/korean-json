import { User } from '../models';

export default () => {
  User.bulkCreate([
    {
      name: '이정도',
      username: 'jd1386',
      email: 'lee.jungdo@gmail.com',
      phone: '010-3192-2910',
      website: 'https://leejungdo.com',
      province: '경기도',
      city: '성남시',
      district: '분당구',
      street: '대왕판교로 160',
      zipcode: '13525'
    },
    {
      name: '김재완',
      username: 'lastrites2018',
      email: 'jaewan@gmail.com',
      phone: '02-879-5000',
      website: 'https://github.com/lastrites2018',
      province: '',
      city: '서울특별시',
      district: '관악구',
      street: '관악로 145',
      zipcode: '08832'
    }
  ]);
};
