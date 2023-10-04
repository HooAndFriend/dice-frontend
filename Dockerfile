FROM node:16 as builder

WORKDIR /app

COPY package*.json ./

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
    if [ -f yarn.lock ]; then \
    yarn --network-timeout 100000 --frozen-lockfile --prefer-offline && \
    yarn cache clean; \
    elif [ -f package-lock.json ]; then \
    npm ci; \
    elif [ -f pnpm-lock.yaml ]; then \
    yarn global add pnpm && pnpm i --frozen-lockfile; \
    else \
    echo "Lockfile not found." && exit 1; \
    fi

COPY . .

RUN yarn build:dev

FROM nginx:latest

COPY --from=builder /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY conf/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]