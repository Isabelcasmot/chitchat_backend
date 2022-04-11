
const create = ({ name, surname, username, password, date_birth, email }) => {

    return db.query('INSERT into users (name, surname, username, password, date_birth, email )VALUES (?,?,?,?,?,?)',
        [name, surname, username, password, date_birth, email]);

}

const login = ({ username, password }) => {
    return db.query('SELECT * FROM users WHERE username=? AND password=?', [username, password])
}

module.exports = {
    create,
    login
}