// server.js
const express = require('express');
const cors = require('cors');
const pool = require('./db'); // Import the database pool
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Define a route to get data from the PostgreSQL database
app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name, description FROM your_table');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching data', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
