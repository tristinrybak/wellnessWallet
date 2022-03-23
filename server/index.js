//initializing express server
const express = require('express');
const app = express();

//initializing mysql database
const mysql = require('mysql');

//initializing cors personal API communication dependency
const cors = require('cors');
app.use(cors());

//Allow json to communicate w/ frontend
app.use(express.json());

//connecting to "employeeSystem" database
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'wellnesswallet',
})


app.post('/create', (req, res)=> {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;

    db.query ('INSERT INTO login_table (username, password) VALUES (?,?)',
     [username, password],
    (err, result)=> {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values Inserted");
        }
     });
})

app.listen(3001, ()=> {
    console.log("Your server is running on port 3001");
})