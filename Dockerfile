FROM node:21.6.1-alpine as node-package

WORKDIR /app

# Копируйте package.json, package-lock.json и TypeScript-код
COPY package.json package-lock.json /app/
COPY . /app/

RUN npm install -g ts-node
RUN npm ci

CMD ["ts-node", "./bot.ts"]
