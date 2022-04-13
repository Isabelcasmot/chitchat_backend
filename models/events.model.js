const create = ({ title, date, time, image, description, address, users_id }) => {

    return db.query('INSERT INTO events(title,date,time,image,description,address,users_id)VALUES(?,?,?,?,?,?,?)',

        [title, date, time, image, description, address, users_id])
}

const getAll = () => {

    return db.query('SELECT * FROM events')
}


module.exports = {
    create,
    getAll
}