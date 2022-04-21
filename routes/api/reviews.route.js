const router = require('express').Router();
const { checkToken } = require('../../helpers/middlewares');
const reviewsModel = require('../../models/reviews.model')



router.post('/new', checkToken, async (req, res) => {

    try {
        req.body.users_id = req.user[0].id;

        const [result] = await reviewsModel.create(req.body)
        res.json(result)

    } catch (error) {
        console.log(error)
        res.json(error)

    }

})

module.exports = router

