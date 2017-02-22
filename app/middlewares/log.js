const LogMiddleware = (req, res, next) => {
  console.log('log middleware');
  next();
};

module.exports = LogMiddleware;
