const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

pool.getConnection()
    .then(conn => {
        console.log('Connexion à MySQL réussie !');
        conn.release();
    })
    .catch(err => {
        console.error('Erreur de connexion à MySQL:', err.message);
    });

module.exports = { pool };
