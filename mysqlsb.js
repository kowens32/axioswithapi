const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'your-rds-endpoint',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database-name'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }

  console.log('Connected to MySQL database as id', connection.threadId);

  connection.query('SELECT DATABASE()', (err, results) => {
    if (err) {
      console.error('Error executing query:', err.stack);
    } else {
      console.log('Connected to the database:', results[0]['DATABASE()']);
    }

    connection.end((err) => {
      if (err) {
        console.error('Error closing the connection:', err.stack);
      } else {
        console.log('MySQL connection closed.');
      }
    });
  });
});