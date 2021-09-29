cd into this project and then

## Run the app locally; try outs

    $ npm install
    $ node bin/www.js

And point your browser to http://localhost:3000
    
## Build an image and run the application in a container

    $ npm install
    $ docker build --tag background-colour-app:latest .
    $ docker run --publish 3000:3000 --env BACKGROUND_COLOUR=yellow background-colour-app:latest

## Deploy the application to a kubernetes cluster in the namespace 'demoapp'

This will declare:

    1. An ingress controller for HTTP traffic to your service.
    2. A service that exposes your pod.
    3. The deployment.
    4. A Persistant volume claim to store data that persists beyond the lifespan of your pod.

Here we assume the cluster configuration file and namespace exist:

    $ kubectl apply -k k8s-declarations -n demoapp --kubeconfig=my_cluster_config