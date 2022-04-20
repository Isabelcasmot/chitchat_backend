const router = require('express').Router();
const { checkToken } = require('../../helpers/middlewares')

router.use('/users', require('./users.route'));
router.use('/events', checkToken, require('./events.route'))
router.use('/reviews', require('./reviews.route'))

module.exports = router;