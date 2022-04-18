const mysql = require('mysql2');

const pool = mysql.createPool({

    host: '127.0.0.1',
    user: 'root',
    password: 'Ilusiones22',
    /* Ilusiones22
    Castilla12*/
    port: 3306,
    database: 'chitchat'

})

global.db = pool.promise()