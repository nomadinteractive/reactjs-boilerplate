# ReactJS Web Application Boilerplate

[![Build Status](https://travis-ci.org/nomadinteractive/reactjs-boilerplate.svg?branch=master)](https://travis-ci.org/nomadinteractive/reactjs-boilerplate)

A react.js web application boilerplate used for new web projects in Nomad Interactive

Technologies we utilize:

- React.js and react-router
- Redux
- Eslint
- Flow Type
- An express wrapper with webpack middleware for development sessions
- Next.js for server rendered pages that are rendered by react components


## Demo / Example

A live demo can be found: https://ni-reactjs-boilerplate.herokuapp.com/


## Create .env file

Create a new file with name .env and set up your application configuration here. The variables defined with an example below:

```
PORT=4600
```


## Run the application

1. ```npm install```
2. ```npm start``` or ```node index.js```


## Deploy on heroku

1. ```git init``` (if you are not cloning this repo)
2. ```heroku login``` (if you haven't logged in)
3. ```heroku create```
4. ```git push heroku master```
