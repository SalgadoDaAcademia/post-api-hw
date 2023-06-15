FROM node:16

WORKDIR /preference-api/src/app

ENV PORT 3000 
ENV HOST 0.0.0.0

COPY package*.json ./


COPY . .

EXPOSE 3000
CMD   yarn install ; yarn start
