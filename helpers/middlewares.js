const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');
const usersModel = require('../models/users.model');

const checkToken = async (req, res, next) => {

    if (!req.headers['authentication']) {

        return res.json({
            error: 'No tienes incluida la cabecera de autentificacion'
        })

    }
    const token = req.headers['authentication'];

    let obj;
    //Isa y Sarai es la contraseña creada en el utils.js para que el token funcione
    try {
        obj = jwt.verify(token, 'Isa y Sarai son las mejores')
    } catch (error) {
        console.log(error)
        return res.json({ error: 'El token es incorrecto' })
    }

    const currentDate = dayjs().unix()
    if (currentDate > obj.expira) {
        return res.json({ error: 'El token esta caducado.Intenta pedir otro' })
    }

    //Si paso por el checktoken consigo el usuario logueado
    const result = await usersModel.getById(obj.usuarioId);
    //req.user nos da la informacion del usuario que ha accedido a la web
    req.user = result[0]
    console.log(req.user)

    next()
}

module.exports = {
    checkToken
}