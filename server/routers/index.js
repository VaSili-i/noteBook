const Router = require('express');
const router = new Router();

const userRouter = require('./userRouter');
const scheduleRouter = require('./scheduleRouter');

router.use('/auth', userRouter);
router.use('/schedule', scheduleRouter);

module.exports = router