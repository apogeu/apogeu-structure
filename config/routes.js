// config/routes.js

module.exports = {
  'get /': HomepagesController.index,

  'get /middleware': [LogMiddleware, HomepagesController.index],

  '/users': [
    {
      method: 'get',
      middlewares: [LogMiddleware],
      controller: UsersController.list,
    },
    {
      method: 'post',
      controller: UsersController.create,
    },
  ],

  '/users/:id': [
    {
      method: 'get',
      controller: UsersController.findById,
    },
    {
      method: 'put',
      controller: UsersController.update,
    },
    {
      method: 'delete',
      controller: UsersController.delete,
    },
  ],

};
