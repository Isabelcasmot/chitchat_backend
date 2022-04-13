const router = require('express').Router();
const eventModel = require('../../models/events.model')


router.post('/', async (req, res) => {
    console.log(req.user)
    try {
        req.body.users_id = req.user[0].id;
        const [result] = await eventModel.create(req.body)
        res.json(result);

    } catch (error) {
        console.log(error)
        res.json({ error: 'Algun campo no es correcto' })

    }

})

module.exports = router;