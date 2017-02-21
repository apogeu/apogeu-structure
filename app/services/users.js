const UsersService = {
  list: (query = {}) => {
    const { limit, skip, sort } = query;
    return UserModel
      .find({})
      .limit(limit)
      .skip(skip)
      .sort(sort);
  },

  create: (body = {}) => {
    const model = new UserModel(body);
    return model.save();
  },

  findById: _id => new Promise((resolve, reject) => {
    UserModel
      .findOne({ _id })
      .then((data) => {
        if (!data) return reject({ success: false, message: 'Not found', status: 404 });
        resolve(data);
      })
      .catch(reject);
  }),

  update: (_id, body) => new Promise((resolve, reject) => {
    UsersService.findById(_id)
      .then((user) => {
        Object.assign(user, body);
        user.save().then(resolve).catch(reject);
      })
      .catch(reject);
  }),

  delete: _id => new Promise((resolve, reject) => {
    UsersService.findById(_id)
      .then((user) => {
        user.remove().then(resolve).catch(reject);
      })
      .catch(reject);
  }),

};

module.exports = UsersService;
