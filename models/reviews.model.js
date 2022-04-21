const create = ({ title, description, score, users_id, events_id }) => {

    return db.query('INSERT INTO reviews (title, description,  score, users_id, events_id) VALUES (?,?,?,?,?)',
        [title, description, score, users_id, events_id])

};

module.exports = {
    create,
}