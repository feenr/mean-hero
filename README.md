[![Build Status](https://travis-ci.com/feenr/mean-hero.svg?branch=master)](https://travis-ci.com/feenr/mean-hero)

# MEAN Hero

## Overview
This project serves as the boilerplate for an application using the MEAN stack. I hope to use it for my own personal angular projects, but I think it's also a good start for others looking to introduce themselves to MEAN.

This project takes the result of the [Tour Of Heroes angular tutorial](https://angular.io/tutorial) and extends it to use Express, Mongo DB, Node.js, Auth0 for Authentication and Heroku for deploying builds. This should make this project a great starting point for developers just getting started with angular.

Much of the project design comes from [mean.io](https://github.com/linnovate/mean). However, it is using Angular version 6, and the latest version of all MEAN dependencies. The ability to use the ng-cli should make extending this boilerplate significantly easier.

## Running the sample app
Using angular dev server
```
// Mongo db should be installed and started. 
> npm install
> npm start
> npm start-ng
// Navigate to http://localhost:4200/
```
Using an Express server with generated static content
```
// Mongo db should be installed and started. 
> npm install
> npm build
> npm start
// Navigate to http://localhost:4040/
```

With Docker
```
> docker-compose up
// Navigate to http://localhost:4200/
```


# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Express
- Express server can be started with `node src/server-start.js`
- Once the angular project has been built, it will be hosted automatically by express
- The heroes API can be found at `http://localhost:4040/api/heroes`
# Mongo DB
- Default db is named `mean`
- Default port is `27017`
- Configuration can be updated in `.env`
# Docker
- To start a dockerized version of your application, use `docker-compose up`
# Auth0
- This project uses [Auth0](https://auth0.com/) for authentication.
# Heroku 
- This project is configured to deploy on Heroku.
- Latest version can be viewed at this URL https://mean-hero.herokuapp.com/heroes. This may take up to a minute to start up as the app server sleeps after 30 minutes of inactivity
# The sample app
### Dashboard
![image](https://user-images.githubusercontent.com/83574/46040447-510ed780-c0de-11e8-98f7-5684a33130d5.png)
### Hero list
![image](https://user-images.githubusercontent.com/83574/46040451-5409c800-c0de-11e8-84e5-223bd580733e.png)
### Update hero
![image](https://user-images.githubusercontent.com/83574/46040459-5704b880-c0de-11e8-8922-01206637a7ae.png)
### Heroes of the storm data
To make this project a little bit more exciting, I have added the ability to load the database with heroes from Heroes of the Storm. An export of hero data from the game can be generated using [this project](https://github.com/koliva8245/HeroesDataParser). The output JSON can be passed as the body for the service ```localhost:4040/heroes/bulkimport```
