const express = require('express');
const router = express.Router();
const connection = require('../database');
/* GET home page. */
router.post('/registersenior', function (req, res) {
    const { name, email, contact, password } = req.body;

    errors = [];
    if (!name) errors.push('Name is required');
    if (!email) errors.push('Email is required');
    if (!contact) errors.push('Contact is required');
    if (!password) errors.push('Password is required');

    if (errors.length > 0) {
        return res.status(400).json({ error: errors.join(", ") });
    }

    const sql = 'INSERT INTO seniorstudent (name, email, contact, password) VALUES (?,?,?,?)';
    const values = [name, email, contact, password];
    connection.query(sql, values, function (err, result) {
        if (err) throw err;
        res.send({message: 'Senior registered successfully'});
    });

});
router.get('/countseniors', function (req, res) {
    const sql = 'SELECT COUNT(*) AS count FROM seniorstudent';
    connection.query(sql, function (err, result) {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json({ count: result[0].count });
    });
});


module.exports = router;

