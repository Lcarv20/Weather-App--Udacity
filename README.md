# Udacity Weather App

- In this directory you can find the source code of my weather app. The structure of the project is the following:

1. routes(expressJS & Node)
   1. routes.js(routes seperated from server code)
1. web(static files)
   1. app.js(client side code)
   1. index.html
1. server.js

## Installation & packages

- Install the packages by simply running the command `npm install` inside the directory from the comand line
- (or), instal the following packages:

1. express
1. cors
1. body-parser
1. dotenv
1. node-fetch

- dev, dependencies:

1. nodemon

- note: "API key is not included in this project"

## Explanation

- I have followed the udacity rubric sheet for this project. I have decided to make the fetch to openweather in the server side because I believe it's more secure, so I don't expose my api key to users. Unfortunatly node does not support the fetch api, so another extensions is needed, node-fetch. :sweat_smile:
