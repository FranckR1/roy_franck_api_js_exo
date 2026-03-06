const mysql = require('mysql2/promise');
const { logger } = require('../core/logger/logger');

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

pool.getConnection()
    .then(conn => {
        logger.info('Connexion à MySQL réussie !');
        conn.release();
    })
    .catch(err => {
        logger.info('Erreur de connexion à MySQL:', err.message);
    });

module.exports = { pool };
