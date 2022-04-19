const router = require('express').Router();
const eventModel = require('../../models/events.model');
const NodeGeocoder = require('node-geocoder');
const options = {
    provider: 'google',
    apiKey: 'AIzaSyBMOcTcAkobrlfKIBOJNz6lDw2R5fJsk_Q'

};

const geocoder = NodeGeocoder(options);


router.post('/new', async (req, res) => {
    console.log(req.user)
    try {
        req.body.users_id = req.user[0].id;
        //Aqui obtenemos la latitud y la longitud
        const latlng = await geocoder.geocode(req.body.address);

        req.body.lat = latlng[0].latitude;
        req.body.lng = latlng[0].longitude;
        const [result] = await eventModel.create(req.body)
        res.json(result);
        console.log(result)


    } catch (error) {
        console.log(error)
        res.json({ error: 'Algun campo no es correcto' })

    }

})


router.get('/', async (req, res) => {
    try {
        const [result] = await eventModel.getAll()
        res.json(result)
        console.log(result)
    } catch (error) {
        res.json({ error: 'No hemos podido recuperar la informacion' })
    }

})


router.get('/:eventId', async (req, res) => {

    try {
        const [result] = await eventModel.getById(req.params.eventId)
        res.json(result)

    } catch (error) {
        res.json({ error: 'No hemos podido recuperar el evento' })

    }

})

router.get('/lan/:lanId', async (req, res) => {

    try {
        const [result] = await eventModel.findByLan(req.params.lanId)
        res.json(result)

    } catch (error) {
        res.json({ error: 'No hemos podido recuperar los eventos por idioma' })

    }

})

router.delete('/:eventId', async (req, res) => {
    try {
        const [result] = await eventModel.deleteEvent(req.params.eventId)
        res.json(result)
    } catch (error) {
        res.json({ error: 'No ha sido borrado el evento' })

    }
})

module.exports = router;