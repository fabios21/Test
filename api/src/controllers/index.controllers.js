const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '0894fabio',
    database: 'Test',
    port: '5432'
});

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM Public."users"');
    res.status(200).json(response.rows);
};

module.exports = {
    getUsers
};