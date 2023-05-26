const express = require('express');
const errorMiddleware = require('./middleware/error.middleware');
const { loginRoute, phoneRoute } = require('./routes');

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/analytics', phoneRoute);

app.use(errorMiddleware);

module.exports = app;