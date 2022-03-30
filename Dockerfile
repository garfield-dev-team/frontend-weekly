FROM node:14-alpine as builder

ENV PROJECT_ENV production
ENV NODE_ENV production

WORKDIR /code

COPY package*.json /code
RUN yarn install --registry=https://registry.npmmirror.com/

COPY . /code
RUN yarn build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /code/dist /code/dist
