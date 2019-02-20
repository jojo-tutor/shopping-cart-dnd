FROM node:10.15-alpine as builder
WORKDIR /var/app
COPY ./package.json  /var/app/package.json
RUN npm install
ENV NODE_ENV production
COPY ./ /var/app/
RUN npm run build --silent
RUN cp -vr build/* public/
WORKDIR /var/app/public
RUN cp -vr fonts css/
RUN rm -rf fonts
RUN ls -al

FROM node:10.15-alpine as runner
ENV PORT 8080
ENV NODE_ENV production
RUN npm install -g pm2
WORKDIR /var/app
COPY ./package.json  /var/app/
RUN npm install --production --silent
RUN mkdir -p views public
COPY --from=builder /var/app/public /var/app/public
COPY --from=builder /var/app/server.js /var/app/server.js
CMD pm2-runtime server.js
