const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'semanticWeb',
        user: 'root',
        database: 'root',
        connectTimeout: 30000
    });
};