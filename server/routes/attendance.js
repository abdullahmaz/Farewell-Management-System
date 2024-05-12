const express = require('express');
const router = express.Router();
const connection = require('../database');
/* GET home page. */
router.get('/teachercount', function (req, res) {
    connection.query(`
        SELECT COUNT(*) AS teacherCount FROM Teacher
    `, function (err, results) {
        if (err) {
            console.error("Error fetching teacher count: ", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.json({ count: results[0].teacherCount || 0 });
    });
});

router.get('/familycount', function (req, res) {
    connection.query(`
        SELECT COALESCE(SUM(count), 0) AS totalFamilyCount FROM family
    `, function (err, results) {
        if (err) {
            console.error("Error fetching total family count: ", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.json({ totalFamilyCount: results[0].totalFamilyCount });
    });
});

router.get('/seniorcount', function (req, res) {
    connection.query(`
        SELECT COUNT(*) AS seniorCount FROM Senior_Student
    `, function (err, results) {
        if (err) {
            console.error("Error fetching senior student count: ", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.json({ totalSeniorCount: results[0].seniorCount || 0 });
    });
});


module.exports = router;