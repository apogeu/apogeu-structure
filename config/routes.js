// config/routes.js

module.exports = {
  'get /': [LogMiddleware, HomepagesController.index],
  'get /users': UsersController.list,
  'post /users': UsersController.create,
  'get /users/:id': UsersController.findById,
  'put /users/:id': UsersController.update,
  'delete /users/:id': UsersController.delete,
};
