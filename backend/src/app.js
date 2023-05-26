const express = require('express');
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
}

const {
  loginRoute,
  phoneRoute
} = require('./routes');

const errorMiddleware = require('./middleware/error.middleware');

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.use('/login', loginRoute);
app.use('/analytics', phoneRoute);

app.use(errorMiddleware);

module.exports = app;