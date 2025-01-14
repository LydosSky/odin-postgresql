const db = require('../db/queries');

const usersGet = async function (req, res) {
  let searchResults;
  const { search } = req.query;
  if (search) {
    searchResults = await db.searchUsername(search);
  }
  const usernames = await db.getAllUsernames();
  res.render('index', { usernames, searchResults });
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
