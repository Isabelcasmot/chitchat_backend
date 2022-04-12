const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

const createToken = (pUser) => {

    const obj = {
        usuarioId: pUser.id,
        expira: dayjs().add(24, 'hours').unix()
    }

    return jwt.sign(obj, 'Isa y Sarai son las mejores');
}

module.exports = {
    createToken
}
