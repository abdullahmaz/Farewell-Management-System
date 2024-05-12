const express = require('express');
const router = express.Router();
const connection = require('../database');
/* GET home page. */
router.get('/', function (req, res) {
    connection.query(`
    SELECT User.name, User.contactno, User.email FROM User
    JOIN Teacher ON User.user_id = Teacher.user_id
    UNION
    SELECT User.name, User.contactno, User.email FROM User
    JOIN Student ON User.user_id = Student.user_id
    JOIN Senior_student ON Student.student_id = Senior_student.student_id
    `, function (err, results) {
        if (err) {
            console.error("Error fetching guests: ", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.json({ guests: results });
    });
});

module.exports = router;