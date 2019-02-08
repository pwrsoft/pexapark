# Pexapark

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Setup and install

Fork this repo from inside GitHub so you can commit directly to your account, or
simply download the `.zip` bundle with the contents inside.

#### Dependency installation

During the time building this project, you'll need development dependencies of
which run on Node.js, follow the steps below for setting everything up (if you
have some of these already, skip to the next step where appropriate):

1. Download and install [Node.js here](https://nodejs.org/en/download/) for
   Windows or for Mac.
2. Install simple json-server to get fake REST API

```
npm i -g json-server
```
3. Install Angular CLI
```
npm install -g @angular/cli
```

That's about it for tooling you'll need to run the project, let's move onto the
project install.

#### Project installation and server

Now you've pulled down the repo and have everything setup, using the terminal
you'll need to `cd` into the directory that you cloned the repo into and run
some quick tasks:

```
cd <pexaparkp>
npm install
```

Now simply run this to boot up the server:

```
json-server --watch db.json
```

To start up the application run:

```
ng serve
```

Visit `localhost:4200`.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
