const express = require('express');
const router = express.Router();
const connection = require('../database');
/* GET home page. */
router.post('/registerteacher', function (req, res) {
    const { name, email, subject, phone } = req.body;

    errors = [];
    if (!name) errors.push('Name is required');
    if (!email) errors.push('Email is required');
    if (!subject) errors.push('Subject is required');
    if (!phone) errors.push('Phone is required');

    if (errors.length > 0) {
        return res.status(400).json({ error: errors.join(", ") });
    }

    const sql = 'INSERT INTO teacher (name, email, subject, phone) VALUES (?,?,?,?,?)';
    const values = [name, email, subject, phone];
    connection.query(sql, values, function (err, result) {
        if (err) throw err;
        res.send('Teacher registered successfully');
    });

});

router.post('/registerfamily', function (req, res) {
    const { family_name, no_of_family } = req.body;

    errors = [];
    if (!family_name) errors.push('Family name is required');
    if (!no_of_family) errors.push('Number of family is required');

    if (errors.length > 0) {
        return res.status(400).json({ error: errors.join(", ") });
    }

    const sql = 'INSERT INTO family (family_name, no_of_family) VALUES (?,?,?,?,?)';
    const values = [family_name, no_of_family];
    connection.query(sql, values, function (err, result) {
        if (err) throw err;
        res.send('Family registered successfully');
    });



});

module.exports = router;

