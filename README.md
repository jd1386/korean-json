# korean-json
Super simple JSON API serving fake data in Korean. See [korean-json](https://koreanjson.com) in action.


## What is Korean JSON?
Request GET, POST, PUT, DELETE actions and get JSON data in Korean to get the most out of the look and feel of Korean language when prototyping your project.

한국어 데이터를 제공하는 초간단 JSON API. 
GET, POST, PUT, DELETE 요청을 보내고 한국어 데이터를 받으세요. 라틴어이자 알파벳 문자인 로렘입섬 대신 한글 데이터를 사용하면 프로토타이핑을 조금 더 현실적인 환경에서, 조금 더 빠르고 즐겁게 할 수 있습니다.

## Credit
This project is heavily inspired by [JSONPlaceholder](https://jsonplaceholder.typicode.com) of which we have been big fans for a long time. 
저희는 JSONPlaceholder의 오랜 사용자이자 팬으로서 한국어 사용자들을 대상으로 제작하였습니다.

## How to Contribute

#### 1. Fork this repository
#### 2. `git clone` your remote repository into your local machine
#### 3. Basic setup
  1. `$ cd korean-json`

  2. Install modules
       `$ npm install`

  3. ***(Important)*** Change database credentials 

      Open up `config/db.json` file which holds database credentials. Modify username and password values in the development environment as follows. 

      ```json
      "development": {
          "username": "<YOUR_DATABASE_USERNAME>",
          "password": "<YOUR_DATABASE_PASSWORD>",
          "database": "koreanjson_development",
          "host": "127.0.0.1",
          "dialect": "mysql"
        }
      ```

      

  4. Create local database

       Once you run the following script

       ```shell
       $ node_modules/.bin/sequelize db:create
       # If you prefer npx:
       # npx sequelize db:create
       ```

       a local database called koreanjson_development should be created.

#### 4. Start server
`npm run dev`

#### 5. Commit your work and push to your local repository.
#### 6. Create a pull request
