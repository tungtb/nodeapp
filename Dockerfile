FROM node:6.11.1

MAINTAINER tungtb <tranbatungbk@gmail.com>

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install NPM
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY app /usr/src/app

EXPOSE 3000

CMD ["node","index.js"]