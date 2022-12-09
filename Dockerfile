FROM node:18
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm i
COPY . /app
RUN npm run build
RUN npm i -g serve
CMD serve -s -n build
