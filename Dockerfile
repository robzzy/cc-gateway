FROM node:13.5.0-alpine

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY package.json package.json

COPY node_modules node_modules

COPY dist dist

EXPOSE 8080

CMD ["yarn", "run", "start"]
