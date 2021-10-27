FROM node:alpine3.11
LABEL Description="Background colour application"

USER node

COPY . /home/node

WORKDIR /home/node

RUN /usr/local/bin/npm install && rm -rf 'k8s-declarations'

EXPOSE 3000

ENV BACKGROUND_COLOUR='white'

CMD ["/usr/local/bin/node", "/home/node/bin/www.js"]
