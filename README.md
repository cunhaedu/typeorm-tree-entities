<p align="left">
   <img src=".github/logo.png"/>
</p>

# TypeORM Tree Entities

Learn how to work with tree entities in TypeORM

# :pushpin: Table of Contents

* [Features](#rocket-features)
* [Database Model](#clipboard-database-model)
* [Installation](#construction_worker-installation)
* [Getting Started](#runner-getting-started)
* [Build](#runner-build)
* [Application Routes](#rocket-application-routes)
* [FAQ](#postbox-faq)

# :rocket: Features

* Departments CRUD
* Customers CRUD

# :clipboard: Database Model

In order to understand the entities, I've created the following database model:

<p align="center">
   <img src=".github/db_model.png" width="900"/>
</p>

# :construction_worker: Installation

**You need to install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) first, then in order to clone the project via HTTPS, run this command:**


```
git clone git@github.com:cunhaedu/challenge.git
```

**Install dependencies**

```
yarn install
```
Or

```
npm install
```

Create your environment variables based on the examples of ```.env.example```

```
cp .env.example .env
```

**Setup a database**

Install [Postgres](https://www.postgresql.org/) to create a database and create a database, then you should modify the ```.env``` and ```ormconfig.json``` with your credentials

**Setup e-mail service**

Create an account in [mailTrap](https://mailtrap.io/) and insert your access credential inside .env file

# :runner: Getting Started

Run the transactions in order to configure the database schema:
```
yarn typeorm migration:run
```

Run the following command in order to start the application in a development environment:
```
yarn dev
```

# :runner: Build
Run the following command in order to convert the .ts file to .js file in a folder called dist:
```
yarn build
```

Run the following command in order to start the application in a production environment:
```
yarn start
```

## Status Codes

Check the following status codes in this API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |

# :rocket: Application routes

You can check every routes of this application in the [Request](./requests) folder

If you're using the VS Code, you are able to use a plugin named [Rest cliente](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) that allows you to send HTTP request and view the response in Visual Studio Code directly.

## :postbox: Faq

**Question:** What are the technologies used in this project?

**Answer:** The technologies used in this project are [NodeJS](https://nodejs.org/en/) + [Express Framework](http://expressjs.com/en/) to handle the server and [TypeORM](https://typeorm.io/#/)
