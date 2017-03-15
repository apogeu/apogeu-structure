const log = require('winston');

const LogMiddleware = (req, res, next) => {
  log.debug('log middleware');
  next();
};

module.exports = LogMiddleware;
