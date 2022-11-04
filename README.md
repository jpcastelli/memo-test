 # Memo Test Game
The game has been fully developed in Laravel <v9.37.0> and React <v18.0.0>, by spliting the application in backend and frontend.

## Backend 

## Environment File
### Create a .env file under the root of the project and add below variables
```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_DATABASE=memo-test
DB_USERNAME=root
DB_PASSWORD=
DB_PORT=3306
APP_ENV=development
APP_DEBUG=true
APP_KEY=XXXXXXXXXXXXX
```

### Generate the APP KEY necessary for Laravel cookies encryption.
```bash
% sail php artisan key:generate
```
### Clear cache
```bash 
% php artisan cache:clear
```
### Running Migrations
```bash
% php artisan migrate
```

### Seeding DB Tables
``` bash
 % sail php artisan db:seed --class=MemoTestSeeders
 % sail php artisan db:seed --class=MemoSessionSeeders
```
### Or you can run migration and seeding all in once
```bash
% php artisan migrate:refresh --seed
```

On the backend side I made use of Sail CLI in order to run Laravel's docker containers.
``` bash 
% sail up
```
For serving a GraphQL API server I used <a href="https://lighthouse-php.com/">Lighthouse Framework</a> after installing it as a dependency using Composer. 
In order to have an explore the schema and testing queries I used <a href="https://github.com/mll-lab/laravel-graphiql">GrapiQL</a> but also, Postman could be use too.

# Frontend
After running docker containers and in order to also run React it's necessary to open a new terminal tab and to run:
```bash
% npm install
% npm run dev
```

#Useful GraphQL queries
```bash 
mutation {
  createMemoSession(memo_test_id: 2, retries: 0, number_of_pairs:0) {
    id
  }
}

mutation {
  createMemoTest(name:"Animals", images:[
  "http://any-image-link"
  ]){
    images
  }
}

## Memo Tests Delete Mutation
mutation deleteMemoTest {
  deleteMemoTest(id: 6) {
    name
  }
}

query {
    GetMemoTestById(id: 1){
      id
      name
      images
    sessions {
      id
      retries
    }
  }
}

query {
    GetSessionById(id: 2) {
      retries
      number_of_pairs
    memo {
      id
      name
    } 
  }
}

query {
  GetMemoTests {
    id
    name
  }
}

