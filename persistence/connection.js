const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'semanticWeb',
        connectTimeout: 30000
    });
};