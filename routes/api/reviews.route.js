const router = require('express').Router();
const reviewsModel = require('../../models/reviews.model')



router.post('/new', async (req, res) => {

    try {
        const [result] = await reviewsModel.create(req.body)
        res.json(result)

    } catch (error) {
        res.json(error)

    }

})




module.exports = router

