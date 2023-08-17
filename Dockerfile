FROM node:19.3-bullseye AS builder

WORKDIR /opt/frontend

COPY . /opt/frontend

RUN npm install sharp && npm cache clean --force
RUN npm install --save-dev typescript @types/node && npm cache clean --force
RUN npm install && npm cache clean --force

RUN npx next build
CMD npx next start