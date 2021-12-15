> A Simple Xcoins RestAPI

## Technologies Used

[node]: (https://nodejs.org)

- [Node.js](node)
- [mongoDB](node)
- [Express.js](https://expressjs.com).

## Testing Tools

- [Mocha](https://mochajs.org/).
- [Chai](https://chaijs.com).

## Installations

#### Getting started

- You need to have Node and NPM installed on your computer.
- Installing [Node](node) automatically comes with npm.

#### Clone

- Clone this project to your local machine `https://github.com/iphyokafor/xcoins.git`

#### Setup

- Installing the project dependencies
  > Run the command below
  ```shell
  $ npm install
  ```
- Start your node server
  > run the command below
  ```shell
  $ npm run dev
  ```
- Use `http://localhost:3030` as base url for endpoints

## API Endpoints

| METHOD | DESCRIPTION                    | ENDPOINTS                    |
| ------ | ------------------------------ | ---------------------------- |
| POST   | Add a profile                  | `/api/profile`               |
| GET    | Get all the profile            | `/api/profile`               |
| GET    | Get all favorite               | `/api/favorite`              |
| GET    | Get all favorite by profile id | `/api/favorite/:profile_id`  |
| POST   | Add a simulator                | `/api/simulator/:profile_id` |
| GET    | Get all simulator              | `/api/simulator`             |
| GET    | Get all simulator by id        | `/api/simulator/:profile_id` |

## Tests

- Run test for user authentication
  > run the command below
  ```shell
  $ npm run test
  ```

## Thought Process

> For a production ready application, I thought of improving the state of the application with the following steps

 1. Remove all irrelevant logs.

 2. Add try catch blocks to the rightful controllers and methods, returning a certain error response and success response.

 3. Standardize the response output format.

 4. Add validation to the input using the mongoose default validation and the node package validator.

 5. Add eslint file to make the code look cleaner.

 6. Optimize the use of es6 syntax like const, object destructuring.

 7. Write integration tests using mochai and chai.
