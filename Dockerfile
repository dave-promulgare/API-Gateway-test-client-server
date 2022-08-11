FROM node:18
WORKDIR /home/ubuntu/api-gateway
COPY package*.json ./
RUN npm i --legacy-peer-deps
COPY . .
EXPOSE 3000
CMD [ "sh", "-c", "npm run start:prod"]