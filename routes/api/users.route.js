const router = require('express').Router();
const userModel = require('../../models/users.model');
const bcrypt = require('bcrypt');
const utils = require('../../helpers/utils');

// router.get
//     ('/', (req, res) => {

//         res.end('EL USERS FUNSIONA')
//     })

router.post('/register', async (req, res) => {

    const hash = bcrypt.hashSync(req.body.password, 12)
    req.body.password = hash;

    try {
        const [result] = await userModel.create(req.body)
        res.json({
            success: 'El usuario se ha registrado correctamente',
            result: result
        });

    } catch (error) {
        res.json(error)
    }
})

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

module.exports = router;