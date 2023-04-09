FROM node:lts-alpine

WORKDIR /app

COPY ./package.json .
RUN npm cache clean --force
RUN npm install
COPY . .

CMD [ "npm", "run", "start" ]
