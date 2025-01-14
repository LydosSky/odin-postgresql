const db = require('../db/queries');

const usersGet = async function (req, res) {
  const usernames = await db.getAllUsernames();
  console.log('Usernames: ', usernames);
  res.send('Usernames: ' + usernames.map((user) => user.username).join(', '));
};

const usersNewGet = function (req, res) {
  ores.render('index', { title: 'Add User' });
};

const usersNewPost = async function (req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect('/');
};

const usersSearchGet = async function (req, res) {
  const { search } = req.query;
  const usernames = await db.searchUsername(search);
  res.send(
    'Search Results: ' + usernames.map((user) => user.username).join(', '),
  );
};

module.exports = { usersGet, usersNewGet, usersNewPost, usersSearchGet };
