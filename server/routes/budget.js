const express = require('express');
const router = express.Router();
const connection = require('../database');
/* GET home page. */
router.get('/', function (req, res) {
    connection.query(`
    SELECT COALESCE(SUM(price), 0) AS totalMenuPrice FROM Menu
`, function (err, results) {
        if (err) {
            console.error("Error fetching total menu price: ", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.json({ totalMenuPrice: results[0].totalMenuPrice });
    });
});

module.exports = router;