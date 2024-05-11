const express = require('express');
const router = express.Router();
const connection = require('../database');
/* GET home page. */
router.post('/login', function(req, res, next) {
  const {email,password} = req.body
  connection.query("SELECT * FROM Student JOIN User ON Student.user_id = User.user_id WHERE email = ? AND password = ?", [email, password], function(err, results) {
    if (err) {
      console.error("Error verifying user: ", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length > 0) {

      const user = results[0]; // Assuming unique emails, take the first result
      user_details = {
        name: user.name,
        email: user.email,
        phone: user.contactno,
        diet: user.dietary_pref
      };

      console.log("User verified successfully");
      res.json({ message: 'User verified successfully', user: user_details });
    } else {
      return res.status(400).json({ error: "Invalid email or password" });
    }
  });
});

module.exports = router;