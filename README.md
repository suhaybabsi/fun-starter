# fun-starter

A Full-stack setup for developing apps with Node.js. Ready to be depolyed to Heroku without problems.

## Technologies Used

1. Express.js 4 - EJS as a templating engine
2. React 16
3. Webpack 4 & Babel 6
4. Heroku Postgres (ready to be integrated easily)

## Running Locally

Make sure you have [Node.js](http://nodejs.org/)

```
$ npm install
$ npm run dev
$ webpack --watch
```
Your app should now be running on [localhost:5000](http://localhost:5000/).

## Database Management

You can use [Postbird](https://github.com/Paxa/postbird) to manage your Postgres database. It is free, with good features, and is well integrated with Heroku. 

To see this demo running successfully, don't forget to run the following commands, 

```
heroku pg:psql
psql (9.5.2, server 9.6.2)
SSL connection (cipher: DHE-RSA-AES256-SHA, bits: 256)
Type "help" for help.
=> create table test_table (id integer, name text);
CREATE TABLE
=> insert into test_table values (1, 'hello database');
INSERT 0 1
=> \q
```

## Deploying to Heroku

Make sure to install [Heroku CLI](https://cli.heroku.com/). Run the following:

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
