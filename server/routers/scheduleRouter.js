const { Router } = require('express');
const scheduleRouter = new Router();
const scheduleController = require('../controller/scheduleController');

scheduleRouter.post('/', scheduleController.addSchedule);
scheduleRouter.get('/', scheduleController.getSchedule);

module.exports = scheduleRouter