const create = ({ title, date, time, image, description, address, users_id, language_id, lat, lng }) => {

    return db.query('INSERT INTO events(title,date,time,image,description,address,users_id,language_id,lat,lng)VALUES(?,?,?,?,?,?,?,?,?,?)',

        [title, date, time, image, description, address, users_id, language_id, lat, lng])
}

const getAll = () => {

    return db.query('SELECT e.*, l.name as language_name FROM events e, languages l where e.language_id = l.id')
}

const deleteEvent = (pEventId) => {
    return db.query('DELETE FROM events WHERE id = ?', [pEventId])

}

const getById = (pEventId) => {
    return db.query('SELECT * FROM events WHERE id=?', [pEventId])
}

const findByLan = (pLanguageId) => {
    return db.query('SELECT e.*, l.name as language_name FROM events e, languages l WHERE language_id = ? AND e.language_id = l.id;', [pLanguageId])
}



module.exports = {
    create,
    getAll,
    deleteEvent,
    getById,
    findByLan

}