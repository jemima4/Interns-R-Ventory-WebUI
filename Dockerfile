# use the deps image for build, it has all dependencies pre-installed
FROM node:15.14-buster as build
ARG ENVIRONMENT=production

RUN npm install -g @angular/cli@11.2.x

WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install

# add app
COPY . /app

# generate production ready build
RUN ng build --configuration=${ENVIRONMENT} --output-path=dist

# runtime image
FROM nginxinc/nginx-unprivileged:1.23-alpine

USER root
RUN apk del curl nginx-module-xslt
USER 101

# copy nginx config
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

# copy build artifacts to final image
COPY --from=build /app/dist /usr/share/nginx/html
