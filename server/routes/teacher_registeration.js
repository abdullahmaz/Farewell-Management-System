const express = require('express');
const router = express.Router();
const connection = require('../database');
/* GET home page. */
router.post('/registerteacher', function (req, res) {
    const { name, email, subject, phone } = req.body;

    let errors = [];
    if (!name) errors.push('Name is required');
    if (!email) errors.push('Email is required');
    if (!subject) errors.push('Subject is required');
    if (!phone) errors.push('Phone is required');

    if (errors.length > 0) {
        return res.status(400).json({ error: errors.join(", ") });
    }

    // Check if the teacher already exists
    const checkSql = 'SELECT * FROM User WHERE email = ?';
    connection.query(checkSql, [email], function (err, results) {
        if (err) {
            console.error("Error checking user: ", err);
            return res.status(500).json({ error: "Database error while checking user" });
        }
        if (results.length > 0) {
            return res.status(409).json({ error: "Teacher with this email already exists" });
        }

        // If teacher does not exist, proceed to insert
        const userSql = 'INSERT INTO User (name, email, contactno) VALUES (?, ?, ?)';
        const userValues = [name, email, phone];

        connection.query(userSql, userValues, function (err, userResult) {
            if (err) {
                console.error("Error inserting user: ", err);
                return res.status(500).json({ error: "Database error while inserting user" });
            }

            // Then, insert into Teacher table using the inserted user_id
            const teacherSql = 'INSERT INTO Teacher (sub_taught, user_id) VALUES (?, ?)';
            const teacherValues = [subject, userResult.insertId]; // userResult.insertId is the user_id generated from the User table insertion

            connection.query(teacherSql, teacherValues, function (err, teacherResult) {
                if (err) {
                    console.error("Error inserting teacher: ", err);
                    return res.status(500).json({ error: "Database error while inserting teacher" });
                }
                res.send({message: 'Teacher registered successfully'});
            });
        });
    });
});

router.post('/registerfamily', function (req, res) {
    const { familyname, familymembers } = req.body;

    let errors = [];
    if (!familyname) errors.push('Family name is required');
    if (!familymembers) errors.push('Number of family members is required');
    if (errors.length > 0) {
        return res.status(400).json({ error: errors.join(", ") });
    }

    // Check if the family already exists
    const checkSql = 'SELECT * FROM family WHERE name = ?';
    connection.query(checkSql, [familyname], function (err, results) {
        if (err) {
            console.error("Error checking family: ", err);
            return res.status(500).json({ error: "Database error while checking family" });
        }
        if (results.length > 0) {
            return res.status(409).json({ error: "Family already exists" });
        }

        // If family does not exist, proceed to insert
        const insertSql = 'INSERT INTO family (name, count) VALUES (?, ?)';
        const values = [familyname, familymembers];
        connection.query(insertSql, values, function (err, result) {
            if (err) {
                console.error("Error inserting family: ", err);
                return res.status(500).json({ error: "Database error while inserting family" });
            }
            res.send({message: 'Family registered successfully'});
        });
    });
});

router.get('/getallteachers', function (req, res) {
    const sql = 'SELECT Teacher.teacher_id, User.name, User.email, User.contactno, Teacher.sub_taught FROM Teacher JOIN User ON Teacher.user_id = User.user_id';
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

