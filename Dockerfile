FROM node:16.14-alpine

WORKDIR /frontend

COPY . .

EXPOSE 3000

RUN npm install

ENTRYPOINT [ "npm" ]

CMD [ "start" ]