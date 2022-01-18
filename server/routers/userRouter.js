const { Router } = require('express');
const userRouter = new Router();
const checkUser = require('../middleware/checkUser')

const userController = require('../controller/authController');

userRouter.post('/registration', userController.registration);
userRouter.post('/login', userController.login);
userRouter.get('/check', checkUser, userController.check);

module.exports = userRouter;


