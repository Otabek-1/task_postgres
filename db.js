const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mydatabase',
    password: 'ibr0him$!',
    port: 5437,
});

module.exports = pool;