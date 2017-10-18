const app = require('./app');
const logger = require('../utils/helpers/logger');

app.listen(8081, (err) => {
  if (err) {
    logger.error('Service couldn\'t start');
  } else {
    logger.info('Server running on 8081');
  }
});
