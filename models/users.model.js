
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

const getById = (pUsuarioId) => {
    return db.query('SELECT * FROM users WHERE id=?', [pUsuarioId])
}

const findAll = () => {

    return db.query('SELECT name, surname, username, gender, imagen,(SELECT l.name FROM tbi_languages_users tbi, languages l WHERE tbi.user_id = u.id and tbi.type = "w" and tbi.language_id = l.id ) as languageWant, (SELECT l.name FROM tbi_languages_users tbi, languages l WHERE tbi.user_id = u.id and tbi.type = "h" and tbi.language_id = l.id ) as languageHas   FROM users u;'
    )
}

const getByLan = (language_id, type) => {
    return db.query('SELECT name, surname, username, gender, imagen, (SELECT l.name FROM tbi_languages_users tbi, languages l WHERE tbi.user_id = u.id and tbi.type = "w" and tbi.language_id = l.id ) as languageWant, (SELECT l.name FROM tbi_languages_users tbi, languages l WHERE tbi.user_id = u.id and tbi.type = "h" and tbi.language_id = l.id ) as languageHas FROM tbi_languages_users tbi, users u  WHERE tbi.language_id =? and tbi.type= ? AND u.id = tbi.user_id;', [language_id, type])

}



module.exports = {
    create,
    getUserByUsername,
    getById,
    findAll,
    createLan,
    getByLan
}

