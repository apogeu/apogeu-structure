const HomepagesController = {

  index: (req, res) => {
    res.render('index', { title: 'Apogeu' });
  },

};

module.exports = HomepagesController;
