FROM node:16.14-alpine

WORKDIR /backend

COPY . .

EXPOSE 3001

RUN npm install

ENTRYPOINT [ "npm", "run" ]

CMD [ "dev" ]
