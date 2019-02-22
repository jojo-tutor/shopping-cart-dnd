FROM node:10.15-alpine as builder
WORKDIR /var/app
COPY ./package.json  /var/app/package.json
RUN npm install --silent
ENV NODE_ENV production
COPY ./ /var/app/
RUN npm run build --silent

FROM node:10.15-alpine as runner
ENV PORT 8080
ENV NODE_ENV production
RUN npm install -g --silent pm2
WORKDIR /var/app
COPY ./package.json  /var/app/
RUN npm install --production --silent
RUN mkdir -p views public
COPY ./public /var/app/public
COPY ./server.js /var/app/server.js
COPY --from=builder /var/app/build /var/app/build

CMD pm2-runtime server.js
