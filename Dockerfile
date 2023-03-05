FROM node:17-alpine as builder
WORKDIR /app
COPY package.json .
RUN yarn install
COPY ..
RUN yarn build