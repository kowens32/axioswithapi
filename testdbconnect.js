const { Pool } = require('pg');

// Configure the database connection
const pool = new Pool({
  user: 'your-username',
  host: 'your-host',
  database: 'your-database',
  password: 'your-password',
  port: 5432, // default PostgreSQL port
});

// Function to test the database connection and perform a read query
const testDbConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('Connected to the database successfully!');

    // Perform a simple read query
    const result = await client.query('SELECT id, name, description FROM your_table LIMIT 10');
    console.log('Query result:', result.rows);

    client.release();
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    pool.end();
  }
};

// Run the test
testDbConnection();