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


router.get('/', async (req, res) => {
    try {
        const [result] = await eventModel.getAll()
        res.json(result)
    } catch (error) {
        res.json({ error: 'No hemos podido recuperar la informacion' })
    }

})

module.exports = router;