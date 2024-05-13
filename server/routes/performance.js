const express = require('express');
const router = express.Router();
const connection = require('../database');
const bodyParser = require('body-parser');
/* GET home page. */
router.post('/propose', function (req, res) {
    const { managerId, studentId, performanceType, performanceDuration, performanceRequirements } = req.body;

    let errors = [];

    if (!managerId) {
        errors.push("Manager ID is required");
    }
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

    const sqlPerformance = "INSERT INTO Performance (manager_id, type, duration, special_req) VALUES (?, ?, ?, ?)";
    const valuesPerformance = [managerId, performanceType, performanceDuration, performanceRequirements];

    connection.query(sqlPerformance, valuesPerformance, function (err, results) {
        if (err) {
            console.error("Error proposing performance: ", err);
            return res.status(500).json({ error: "Database error" });
        }

        const performanceId = results.insertId;
        const sqlVote = "INSERT INTO Perform_vote (vote_count, student_id, p_id) VALUES (?, ?, ?)";
        const valuesVote = [0, studentId, performanceId]; // Initialize with 0 votes

        connection.query(sqlVote, valuesVote, function (err, results) {
            if (err) {
                console.error("Error initializing votes: ", err);
                return res.status(500).json({ error: "Database error during vote initialization" });
            }

            console.log("Performance proposed and votes initialized successfully");
            res.json({ message: 'Performance proposed and votes initialized successfully' });
        });
    });
});

router.get('/', function (req, res) {
    const sql = `
        SELECT p.p_id, p.manager_id, p.type, p.duration, p.special_req, COALESCE(SUM(v.vote_count), 0) AS vote_count
        FROM Performance p
        LEFT JOIN Perform_vote v ON p.p_id = v.p_id
        GROUP BY p.p_id, p.manager_id, p.type, p.duration, p.special_req
    `;
    connection.query(sql, function (err, results) {
        if (err) {
            console.error("Error fetching performances: ", err);
            return res.status(500).json({ error: "Database error" });
        }

        console.log("Performances and votes fetched successfully");
        res.json({ performances: results });
    });
});

router.delete('/:id', function (req, res) {
    const performanceId = req.params.id;

    // First, delete the associated votes
    const sqlDeleteVotes = "DELETE FROM Perform_vote WHERE p_id = ?";
    connection.query(sqlDeleteVotes, [performanceId], function (err, results) {
        if (err) {
            console.error("Error deleting votes: ", err);
            return res.status(500).json({ error: "Database error while deleting votes" });
        }

        // Then, delete the performance
        const sqlDeletePerformance = "DELETE FROM Performance WHERE p_id = ?";
        connection.query(sqlDeletePerformance, [performanceId], function (err, results) {
            if (err) {
                console.error("Error deleting performance: ", err);
                return res.status(500).json({ error: "Database error while deleting performance" });
            }

            console.log("Performance and associated votes deleted successfully");
            res.json({ message: 'Performance and associated votes deleted successfully' });
        });
    });
});

router.post('/vote/:id', function (req, res) {
    const studentId = req.body.studentId;
    const performanceId = req.params.id;

    if (!studentId) { // Corrected variable name
        return res.status(400).json({ error: 'User ID is required.' });
    }
    // Check if the user has already voted for this performance
    const sqlCheckVote = 'SELECT * FROM Perform_vote WHERE student_id = ? AND p_id = ?';
    connection.query(sqlCheckVote, [studentId, performanceId], function (error, results) { // Corrected variable name
        if (error) {
            res.status(500).json({ error: 'Database error during vote check' });
            return;
        }
        if (results.length > 0) {
            res.status(400).json({ error: 'You have already voted for this performance.' });
        } else {
            // Insert vote into Perform_vote table
            const sqlInsertVote = 'INSERT INTO Perform_vote (vote_count, student_id, p_id) VALUES (1, ?, ?)';
            connection.query(sqlInsertVote, [studentId, performanceId], function (err, insertResults) {
                if (err) {
                    console.error("Error inserting vote: ", err);
                    return res.status(500).json({ error: "Database error while inserting vote" });
                }

                console.log("Vote inserted successfully");
                res.json({ message: 'Vote inserted successfully' });
            });
        }
    });
});

module.exports = router;


