const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_ROOT_PASSWORD,
    database: process.env.MARIADB_DATABASE,
});

pool.getConnection()
    .then(conn => {
        console.log('Connexion à MariaDB réussie !');
        conn.release();
    })
    .catch(err => {
        console.error('Erreur de connexion à MariaDB:', err.message);
    });

export const getPool = () => {
    return pool;
};
