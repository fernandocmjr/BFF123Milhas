FROM node:16.15.0-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
RUN npm install pm2 -g
COPY . .
RUN npm run build
EXPOSE 8099
CMD ["pm2-runtime", "./dist/index.js"]
