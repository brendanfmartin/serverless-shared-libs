# Sharing libs

`clone`

`npm install` at root

replace the `profile` in all serverless.yml

## Running locally

`cd` to appropriate `services/`

`npm start`

`curl localhost:300x/version`

pulls in libs ok and returns

## Running remote

`cd` to appropriate `services/`

`sls deploy -v`

get URL

`curl URL/version`

pulls in libs does not work
