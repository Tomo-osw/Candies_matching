FROM node:18.17.0-alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm ci

RUN rm ./package*.json

# alpineは使わない方が良いとの記述もある
# https://zenn.dev/jrsyo/articles/e42de409e62f5d