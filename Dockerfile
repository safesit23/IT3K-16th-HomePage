FROM node:8.15-alpine
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY ./components ./components
COPY ./pages ./pages
COPY ./static ./static
COPY .babelrc .
COPY .eslintrc .
COPY next.config.js .
COPY prettier.config.js .
COPY package-lock.json .
RUN yarn build

EXPOSE 3002
CMD ["yarn","start","--env=production"]