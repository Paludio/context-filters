const express = require('express');
const { loginRoute } = require('./routes');
const errorMiddleware = require('./middleware/error.middleware');

const app = express();

app.use(express.json());

app.use('/login', loginRoute);

app.use(errorMiddleware);

module.exports = app;