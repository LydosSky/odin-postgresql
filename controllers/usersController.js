const db = require('../db/queries');

const usersGet = async function (req, res) {
  const usernames = await db.getAllUsernames();
  console.log('Usernames: ', usernames);
  res.send('Usernames: ' + usernames.map((user) => user.username).join(', '));
};

const usersNewGet = function (req, res) {
  res.render('index', { title: 'Add User' });
};

const usersNewPost = async function (req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect('/');
};

module.exports = { usersGet, usersNewGet, usersNewPost };
