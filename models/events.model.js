const create = ({ title, date, time, image, description, address, users_id }) => {

    return db.query('INSERT INTO events(title,date,time,image,description,address,users_id)VALUES(?,?,?,?,?,?,?)',

        [title, date, time, image, description, address, users_id])
}

module.exports = {
    create
}