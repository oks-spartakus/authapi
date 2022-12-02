FROM node:latest
WORKDIR /home/node/app
COPY . .
RUN npm install
CMD npm run start
EXPOSE 8888