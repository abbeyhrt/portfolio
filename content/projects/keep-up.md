---
title: Keep Up
description: A web application that provides a way to keep track and keep up with all you and your roommates' household chores.
date: 2018
---

## About the project:

Can you remember that last time you cleaned your fridge? Changed your air filters? Mowed the lawn? Life moves fast and it’s easy to forget all that you have to do to maintain a clean home, that’s where Keep Up comes into play. With a rotating assignment schedule, you can create tasks, assign their frequency, and assign a rotation of who should complete the task. With Keep Up’s interactive dashboard, you can see what you need to get done each week, check your progress, and see the progress of your roommates on their tasks.

Josh Black and I started Keep Up to solve our own roommate disputes and to have a place to clearly communicate what needs to be done around the house. We needed it and we figured other people did too.

[Project](https://keepup.company)

Project on [Github](https://github.com/abbeyhrt/keep-up)

So far, to develop Keep Up, I have used the following technologies:

- GraphQL
- Apollo
- Go
- React.js
- IBM Cloud
- create-react-app for UI
- Docker
- Postgres
- Sass
- Nginx for proxy

In order to query the database, created using Postgres, I used Graphql, specifically Go's graphql-go package, to get back the information I needed and nothing more. I found Graphql's query structure and resolver pattern to be simple to use and quick to implement. I look forward to using Graphql more and more to unleash its full potential! Here are some example queries and mutations that I created using Graphql for Keep Up.

<div class="post__images">
  <img class="post__image" src="/portfolio/images/graphql-query-viewer.png">
  <img class="post__image" src="/portfolio/images/Graphql-query-mutation.png">
</div>

In tandem with Graphql, I used Apollo Client to recieve my queried information and display it on the UI. Apollo and React.js go well together and Apollo made it easy to divide the queries and mutations into different reusable components so I could put them anywhere they were needed within the site.

Keep Up is a work in progress but the current version of the site is deployed on IBM Cloud using Docker and Cloud foundry, using the `ibmcloud` CLI tool to help automate deployments through CircleCI. We also used IBM Cloud’s custom DNS option to serve our project on a custom vanity URL and let's encrypt to set up HTTPS.
