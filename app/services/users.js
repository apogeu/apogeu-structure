const _findById = _id => {
  UserModel
    .findOne({ _id })
    .then((data) => {
      if (!data) return reject({ success: false, message: 'Not found', status: 404 });
      resolve(data);
    })
    .catch(reject);
};

module.exports = {

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
    model.name = body.name;
    return model.save();
  },

  findById: _findById,

  update: (_id, body) => new Promise((resolve, reject) => {
    _findById(_id)
      .then(user => {
        Object.assign(user, body);
        user.save().then(resolve).catch(reject);
      })
      .catch(reject);
  }),

  delete: _id => new Promise((resolve, reject) => {
    _findById(_id)
      .then(user => {
        user.delete().then(resolve).catch(reject);
      })
      .catch(reject);
  }),

};
