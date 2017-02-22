const UsersController = {

  list: (req, res, next) => {
    UsersService
      .list(req.query)
      .then(data => res.status(200).json({ success: true, data }))
      .catch(next);
  },

  create: (req, res, next) => {
    UsersService
      .create(req.body)
      .then(data => res.status(200).json({ success: true, data }))
      .catch(next);
  },

  findById: (req, res, next) => {
    UsersService
      .findById(req.params.id)
      .then(data => res.status(200).json({ success: true, data }))
      .catch(next);
  },

  update: (req, res, next) => {
    UsersService
      .update(req.params.id, req.body)
      .then(data => res.status(200).json({ success: true, data }))
      .catch(next);
  },

  delete: (req, res, next) => {
    UsersService
      .delete(req.params.id)
      .then(() => res.status(200).json({ success: true }))
      .catch(next);
  },

};

module.exports = UsersController;
