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

const eventUsers = (pEventId) => {
    return db.query('SELECT * FROM tbi_events_users tbi,users u WHERE tbi.event_id=? AND tbi.user_id=u.id', [pEventId])
}

const addEventUser = (pUser_id, pEvent_id) => {
    return db.query('INSERT INTO tbi_events_users(user_id,event_id) VALUES (?,?)', [pUser_id, pEvent_id])
}

const findReviews = (pEventId) => {

    return db.query('SELECT * FROM reviews WHERE events_id= ?', [pEventId])
}

module.exports = {
    create,
    getAll,
    deleteEvent,
    getById,
    findByLan,
    eventUsers,
    addEventUser,
    findReviews

}