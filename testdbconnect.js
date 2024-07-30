const { Pool } = require('pg');

// Configure the database connection
const pool = new Pool({
  user: 'your-username',
  host: 'your-host',
  database: 'your-database',
  password: 'your-password',
  port: 5432, // default PostgreSQL port
});

// Function to test the database connection
const testDbConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('Connected to the database successfully!');
    const result = await client.query('SELECT NOW()');
    console.log('Current time from database:', result.rows[0]);
    client.release();
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    pool.end();
  }
};

// Run the test
testDbConnection();
