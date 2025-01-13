const { Router } = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = Router();

usersRouter.get('', usersController.usersGet);
usersRouter.get('/new', usersController.usersNewGet);
usersRouter.post('/new', usersController.usersNewPost);

module.exports = usersRouter;