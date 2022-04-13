
const create = ({ name, surname, username, password, date_birth, email, gender }) => {

    return db.query('INSERT into users (name, surname, username, password, date_birth, email,gender )VALUES (?,?,?,?,?,?,?)',
        [name, surname, username, password, date_birth, email, gender]);

}

const createLan = ({ user_id, language_id, type }) => {

    return db.query('INSERT into tbi_languages_users (user_id, language_id, type)VALUES (?, ?, ?)',
        [user_id, language_id, type])

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
    findAll,
    createLan
}