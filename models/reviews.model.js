const create = ({ title, description, create_at, score, user_id, events_id }) => {

    return db.query('INSERT INTO reviews (title, description, create_at, score, user_id, events_id) VALUES (?,?,?,?,?,?)',
        [title, description, create_at, score, user_id, events_id])


};

module.exports = {
    create
}