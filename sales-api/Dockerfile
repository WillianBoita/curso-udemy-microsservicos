FROM node:20.19.3
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npx tsc

EXPOSE 9092
CMD ["node", "dist/app.js"]

