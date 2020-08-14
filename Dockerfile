FROM node:14-alpine as builder

WORKDIR /home/node/app

COPY . .

RUN yarn && \
    yarn exec gulp build

FROM caddy:2.1.1-alpine

COPY --from=builder /home/node/app/build /usr/share/caddy
