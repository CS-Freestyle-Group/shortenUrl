FROM node:14-alpine

ENV MONGO_DB_URL=mongodb+srv://first545455:3fDnlRxYb74n10w8@discordcluser.z7fpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install --production --silent && mv node_modules ../

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
