const express = require('express');
const home_controller = require('../controllers/home_controller');
const router = express.Router();
console.log('Router loaded');
router.get('/home', home_controller.home);
module.exports = router;
