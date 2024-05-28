const mysql = require('mysql2');

const path = require('path');
const dotenv = require('dotenv');
const envFilePath = path.resolve(__dirname, '../../.env');
dotenv.config({ path: envFilePath });

const connection = mysql.createConnection({
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    port: process.env.SQL_PORT
});

//create db
connection.query('CREATE DATABASE IF NOT EXISTS  project', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Database created successfully');
        
    }
});

connection.end();
