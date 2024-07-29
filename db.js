// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'your-username',
  host: 'your-host',
  database: 'your-database',
  password: 'your-password',
  port: 5432, // default PostgreSQL port
});

module.exports = pool;
