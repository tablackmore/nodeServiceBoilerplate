const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const nocache = require('nocache');
const morgan = require('morgan');

const routesV1 = require('./v1/routes');
const allowCrossOrigin = require('./v1/middleware/allowCrossOrigin');
const logger = require('../utils/helpers/logger');

const app = express();
const isProd = process.env.NODE_ENV === 'production';
const logLevel = isProd ? 'combined' : 'dev';

/* Provide access logging */
app.use(morgan(logLevel, {
  stream: {
    write: (message) => logger.log('info', message.trim()),
  },
}));

/* Follow http best practices */
app.use(helmet());

/* Retrieve body info and decorate on response obj */
app.use(bodyParser.json());

/* Compress responses to save bandwidth */
app.use(compression());

/* Set no cache headers on responses */
app.use(nocache());

/* Allow cross origin requests */
app.use(allowCrossOrigin);

app.use('/v1', routesV1);

app.use((req, res) => {
  res.status(404).json({
    type: 'error',
    message: 'Not found',
  });
});

module.exports = app;
