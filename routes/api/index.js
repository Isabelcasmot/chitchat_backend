const router = require('express').Router();
const { checkToken } = require('../../helpers/middlewares')

router.use('/users', checkToken, require('./users.route'));
router.use('/events', checkToken, require('./events.route'))

module.exports = router;