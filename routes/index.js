const app = require('../app');

const router = require('express').Router();


router.use('/api', require('./api'))


module.exports = router;