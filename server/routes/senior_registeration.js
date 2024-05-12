const express = require('express');
const router = express.Router();
const connection = require('../database');

router.post('/registersenior', function (req, res) {
    const { name, email, contact, password, diet } = req.body;
    let errors = [];
    if (!name) errors.push('Name is required');
    if (!email) errors.push('Email is required');
    if (!contact) errors.push('Contact is required');
    if (!password) errors.push('Password is required');
    if (!diet) errors.push('Dietary preference is required');
    console.log(req.body)
    if (errors.length > 0) {
        return res.status(400).json({ error: errors.join(", ") });
    }

    // First, insert into User table
    const userSql = 'INSERT INTO User (name, email, contactno) VALUES (?,?,?)';
    const userValues = [name, email, contact];
    connection.query(userSql, userValues, function (err, userResult) {
        if (err) {
            res.status(500).json({ error: 'Failed to register user' });
            return;
        }

        // Get the last inserted user_id
        const userId = userResult.insertId;

        // Then, insert into Student table
        const studentSql = 'INSERT INTO Student (dietary_pref, password, user_id) VALUES (?,?,?)';
        const studentValues = [diet, password, userId];
        connection.query(studentSql, studentValues, function (err, studentResult) {
            if (err) {
                res.status(500).json({ error: 'Failed to register student' });
                return;
            }

            // Get the last inserted student_id
            const studentId = studentResult.insertId;

            // Then, insert into Senior_student table
            const seniorSql = 'INSERT INTO Senior_student (student_id) VALUES (?)';
            const seniorValues = [studentId];
            connection.query(seniorSql, seniorValues, function (err, seniorResult) {
                if (err) {
                    res.status(500).json({ error: 'Failed to register senior student' });
                    return;
                }
                res.send({message: 'Senior registered successfully'});
            });
        });
    });
});

router.get('/countseniors', function (req, res) {
    const sql = 'SELECT COUNT(*) AS count FROM Senior_student';
    connection.query(sql, function (err, result) {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json({ count: result[0].count });
    });
});


module.exports = router;

