const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bai_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

app.post('/register', (req, res) => {
    const { name, email, password, phone, user_type } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    const sql = 'INSERT INTO users (name, email, password, phone, user_type) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [name, email, hashedPassword, phone, user_type], (err, result) => {
        if (err) throw err;
        res.send({ message: 'User registered' });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) throw err;

        if (results.length && bcrypt.compareSync(password, results[0].password)) {
            const token = jwt.sign({ id: results[0].id }, 'secret_key', { expiresIn: '1h' });
            res.send({ auth: true, token });
        } else {
            res.status(401).send('Email or password incorrect');
        }
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
