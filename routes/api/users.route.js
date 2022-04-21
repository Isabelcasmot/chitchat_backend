const router = require('express').Router();
const userModel = require('../../models/users.model');
const bcrypt = require('bcrypt');
const utils = require('../../helpers/utils');
const { checkToken } = require('../../helpers/middlewares');



/* All users */
router.get
    ('/', async (req, res) => {
        try {
            const [result] = await userModel.findAll()
            res.json(result)
        } catch (error) {
            res.json(error)
        }
    })



/* Filter by Language */
router.get('/lan/:lan/type/:type', async (req, res) => {
    try {
        const [resultH] = await userModel.getByLan(req.params.lan, req.params.type)
        // console.log(resultH)
        res.json(resultH)
    } catch (error) {
        res.json(error)
    }
})




/* Profile */
router.get('/profile', checkToken, async (req, res) => {

    //res.json(req.user)
    try {
        console.log(req.user)
        const [result] = await userModel.getById(req.user[0].id)
        res.json(result)

    } catch (error) {
        res.json(error)
    }

})


/* events user */

router.get('/profile/events', checkToken, async (req, res) => {

    try {
        console.log(req.user)
        const [result] = await userModel.userEvents(req.user[0].id)
        res.json(result)

    } catch (error) {
        res.json(error)
    }
})

/* Register Form*/

router.post('/register', async (req, res) => {

    const hash = bcrypt.hashSync(req.body.password, 12)
    req.body.password = hash;

    try {
        const [result] = await userModel.create(req.body)

        const userId = result.insertId
        const lanHas = req.body.languageHas
        const lanWant = req.body.languageWant
        await userModel.createLan({ user_id: userId, language_id: lanHas, type: "h" })
        await userModel.createLan({ user_id: userId, language_id: lanWant, type: "w" })

        res.json({
            success: 'El usuario se ha registrado correctamente',
            result: result
        });

    } catch (error) {
        console.log(error)
        res.json(error)
    }
})

/* User Login */

router.post('/login', async (req, res) => {


    const [result] = await userModel.getUserByUsername(req.body)

    if (result.length === 0) {
        return res.json({ error: 'Usuario no existe' })
    }
    const user = result[0];

    const iguales = bcrypt.compareSync(req.body.password, user.password);

    if (!iguales) {
        return res.json({ error: 'Usuario y/o contraseña incorrectos' })
    }

    res.json({
        success: 'Login correcto',
        token: utils.createToken(user)
    })

})


/* Events user profile */

router.get('/')







module.exports = router;
