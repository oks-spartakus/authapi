FROM node:12
WORKDIR /home/node/app
COPY . .
RUN npm install
COPY . /home/node/app
EXPOSE 1989
CMD ["npm", "start"]