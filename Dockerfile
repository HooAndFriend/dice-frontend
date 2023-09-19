
FROM node:16 as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build:dev

FROM nginx:latest
 
RUN mkdir /app
 
WORKDIR /app
 
RUN mkdir ./dist
 
ADD ./dist ./dist
 
RUN rm /etc/nginx/conf.d/default.conf
 
COPY conf/default.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]