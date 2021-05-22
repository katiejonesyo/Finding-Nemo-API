
The beginning of a small Finding Nemo API





Create SQL BE

## Getting started
1. Clone your repo down and run `npm i` to install dependencies.
1. Change all the files in the `data` directory to match the data model of your app.
1. Run `heroku create`
1. Run `npm run setup-heroku` to create a heroku SQL database in the cloud to go with your heroku app.
1. Run `heroku config:get DATABASE_URL` to get your heroku sql database url from the cloud.
1. Put the database URL in your .env file, under `DATABASE_URL`. (Don't forget to changge the file name from `.env-example` to `.env`!)
1. Run `npm run setup-db`
1. Run `npm run start:watch` to start the dev server
1. Routes are in `app.js`, not in `server.js`. This is so our tests will not launch a server every time.
