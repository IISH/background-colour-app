FROM node:alpine3.11
LABEL Description="Background color application"

USER node

COPY . /home/node

WORKDIR /home/node

RUN /usr/local/bin/npm install

EXPOSE 3000

ENV BACKGROUND_COLOUR='white'

CMD ["/usr/local/bin/node", "/home/node/bin/www.js"]
