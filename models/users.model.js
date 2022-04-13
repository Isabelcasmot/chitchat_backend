
const create = ({ name, surname, username, password, date_birth, email, gender }) => {

    return db.query('INSERT into users (name, surname, username, password, date_birth, email,gender )VALUES (?,?,?,?,?,?,?)',
        [name, surname, username, password, date_birth, email, gender]);

}

const getUserByUsername = ({ username }) => {
    return db.query('SELECT * FROM users WHERE username=?', [username])
}

const findAll = () => {

    return db.query('SELECT name, surname, username, gender FROM users')
}

module.exports = {
    create,
    getUserByUsername,
    findAll
}