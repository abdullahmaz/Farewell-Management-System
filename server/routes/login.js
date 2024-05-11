const express = require('express');
const router = express.Router();
const connection = require('../database');
/* GET home page. */
router.post('/login', function(req, res, next) {
  const {email,password} = req.body
  connection.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], function(err, results) {
    if (err) {
      console.error("Error verifying user: ", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length > 0) {
      console.log("User verified successfully");
      res.json({ message: 'User verified successfully' });
    } else {
      return res.status(400).json({ error: "Invalid email or password" });
    }
  });
});

module.exports = router;