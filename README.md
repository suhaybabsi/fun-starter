# fun-starter

A Full-stack setup for developing apps with Node.js. Ready to be depolyed to Heroku without problems.

## Technologies Used

1. Express.js 4 - EJS as a templating engine
2. React 16
3. Webpack 4 & Babel 6
4. Heroku Postgres (ready to be integrated easily)

## Running Locally

Make sure you have [Node.js](http://nodejs.org/)

```sh
$ npm install
$ npm run dev
$ webpack --watch
```
Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

Make sure to install [Heroku CLI](https://cli.heroku.com/). Run the following:

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
