
const create = ({ name, surname, username, password, date_birth, email, gender }) => {

    return db.query('INSERT into users (name, surname, username, password, date_birth, email,gender )VALUES (?,?,?,?,?,?,?)',
        [name, surname, username, password, date_birth, email, gender]);

}

const getUserByUsername = ({ username }) => {
    return db.query('SELECT * FROM users WHERE username=?', [username])
}

const getById = (pUsuarioId) => {
    return db.query('SELECT * FROM users WHERE id=?', [pUsuarioId])
}

const findAll = ({ name, surname, username, gender }) => {

    return db.query('SELECT * FROM users', [name, surname, username, gender])
}

module.exports = {
    create,
    getUserByUsername,
    getById,
    findAll
}