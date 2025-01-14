const { Router } = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = Router();

usersRouter.get('', usersController.usersGet);
usersRouter.get('/new', usersController.usersNewGet);
usersRouter.post('/new', usersController.usersNewPost);
usersRouter.get('/delete', usersController.usersDeleteGet);

module.exports = usersRouter;
