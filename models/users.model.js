
const create = ({ name, surname, username, password, date_birth, email }) => {

    return db.query('INSERT into users (name, surname, username, password, date_birth, email )VALUES (?,?,?,?,?,?)',
        [name, surname, username, password, date_birth, email]);

}

module.exports = { create }