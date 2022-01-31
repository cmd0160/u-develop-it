const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Snareline1',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})

// route to handle user requests that aren't supported by the app
// catchall route
app.use((req, res) => {
    res.status(404).end();
});

// connection function that will start the express server on port 3001
app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
});