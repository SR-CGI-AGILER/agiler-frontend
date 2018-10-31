FROM node:carbon

WORKDIR /random

COPY . /random

RUN npm install

RUN npm install -g http-server 

RUN npm run build

WORKDIR ./dist

CMD ["http-server", "-c1"]