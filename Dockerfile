FROM node:14.16.0-alpine

RUN mkdir -p /usr/src/freetube
WORKDIR /usr/src/freetube

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/src/freetube/
RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]