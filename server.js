// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const data = [
  { name: 'Item 1' },
  { name: 'Item 2' },
  { name: 'Item 3' },
];

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
