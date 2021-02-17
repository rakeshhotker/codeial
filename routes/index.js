const express = require('express');
const home_controller = require('../controllers/home_controller');
const router = express.Router();
console.log('Router loaded');
router.get('/', home_controller.actionName);
router.use('/users', require('./users'));
module.exports = router;
