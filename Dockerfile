FROM node:18
WORKDIR /usr/src/app/index-rework
COPY package.json .
COPY package-lock.json .
COPY . .
RUN npm i
CMD ["npm", "run", "start"]
EXPOSE 3000