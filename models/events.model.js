const create = ({ title, date, time, image, description, address, users_id, lat, lng }) => {

    return db.query('INSERT INTO events(title,date,time,image,description,address,users_id,lat,lng)VALUES(?,?,?,?,?,?,?,?,?)',

        [title, date, time, image, description, address, users_id, lat, lng])
}

const getAll = () => {

    return db.query('SELECT * FROM events')
}

const deleteEvent = (eventId) => {
    return db.query('DELETE FROM events WHERE id = ?', [pEventId])

}

const getById = (pEventId) => {
    return db.query('SELECT * FROM events WHERE id=?', [pEventId])
}



module.exports = {
    create,
    getAll,
    deleteEvent,
    getById
}