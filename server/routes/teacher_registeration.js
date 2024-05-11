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
    const sql = 'INSERT INTO teacher (name, email, subject, phone) VALUES (?,?,?,?)';
    const values = [name, email, subject, phone];
    connection.query(sql, values, function (err, result) {
        if (err) throw err;
        res.send({message: 'Teacher registered successfully'});
    });
});

router.post('/registerfamily', function (req, res) {
    const { familyname, familymembers } = req.body;

    errors = [];
    if (!familyname) errors.push('Family name is required');
    if (!familymembers) errors.push('Number of family members is required');
    if (errors.length > 0) {
        return res.status(400).json({ error: errors.join(", ") });
    }

    const sql = 'INSERT INTO family (familyname, familymembers) VALUES (?,?)';
    const values = [familyname, familymembers];
    connection.query(sql, values, function (err, result) {
        if (err) throw err;
        res.send({message: 'Family registered successfully'});
    });
});

router.get('/getallteachers', function (req, res) {
    const sql = 'SELECT * FROM teacher';
    connection.query(sql, function (err, results) {
        if (err) {
            console.error("Error fetching teachers: ", err);
            return res.status(500).json({ error: "Database error while fetching teachers" });
        }
        res.json({ teachers: results });
    });
});

router.get('/getallfamilies', function (req, res) {
    const sql = 'SELECT * FROM family';
    connection.query(sql, function (err, results) {
        if (err) {
            console.error("Error fetching families: ", err);
            return res.status(500).json({ error: "Database error while fetching families" });
        }
        res.json({ families: results });
    });
});

module.exports = router;

