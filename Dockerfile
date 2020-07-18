FROM node:14

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install -g typescript ts-node

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "nodemon"]