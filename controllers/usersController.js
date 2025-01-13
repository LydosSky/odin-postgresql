const usersGet = function (req, res) {
  console.log('usernames will be logged here - wip');
  res.end();
};

const usersNewGet = function (req, res) {
  res.render('index', { title: 'Add User' });
};

const usersNewPost = function (req, res) {
  console.log('username to be saved: ', req.body.username);
  res.redirect('/');
};

module.exports = { usersGet, usersNewGet, usersNewPost };
