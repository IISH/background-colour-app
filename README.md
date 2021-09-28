cd into this project and then

## Run the app locally; try outs

    $ npm install
    $ node bin/www.js

And point your browser to http://localhost:3000
    
## Build an run an image

    $ npm install
    $ docker build --tag background-colour-app:latest .

## Run a container

    $ docker run --publish 3000:3000 --env BACKGROUND_COLOUR=yellow background-colour-app:latest

## Deploy the container on a kubernetes cluster in the namespace 'demoapp'

    $ kubectl apply -f k8s-declarations -n demoapp