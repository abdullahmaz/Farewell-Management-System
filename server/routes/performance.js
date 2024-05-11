const express = require('express');
const router = express.Router();
const connection = require('../database');
/* GET home page. */
router.post('/propose', function (req, res) {
    const { performanceType, performanceDuration, performanceRequirements } = req.body;
    console.log(performanceType, performanceDuration, performanceRequirements);

    let errors = [];

    if (!performanceType) {
        errors.push("Performance type is required");
    }

    if (!performanceDuration) {
        errors.push("Performance duration is required");
    }

    if (!performanceRequirements) {
        errors.push("Performance requirements are required");
    }

    if (errors.length > 0) {
        return res.status(400).json({ error: errors.join(", ") });
    }

    const sql = "INSERT INTO performance (performance_type, performance_duration, performance_req) VALUES (?, ?, ?)";
    const values = [performanceType, performanceDuration, performanceRequirements];

    connection.query(sql, values, function (err, results) {
        if (err) {
            console.error("Error proposing performance: ", err);
            return res.status(500).json({ error: "Database error" });
        }

        console.log("Performance proposed successfully");
        res.json({ message: 'Performance proposed successfully' });
    });

});

router.get('/', function (req, res) {
    const sql = "SELECT * FROM performance";
    connection.query(sql, function (err, results) {
        if (err) {
            console.error("Error fetching performances: ", err);
            return res.status(500).json({ error: "Database error" });
        }

        console.log("Performances fetched successfully");
        res.json({ performances: results });
    });
});

module.exports = router;

