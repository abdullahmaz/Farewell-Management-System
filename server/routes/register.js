const express = require('express');
const router = express.Router();
const connection = require('../database');

/* GET home page. */
router.post('/register', function(req, res) {
  const { name, email, phone, password, diet } = req.body;
  let errors = [];

  if (!name) {
    errors.push("Name is required");
  }
  if (!email) {
    errors.push("Email is required");
  }
  if (!phone) {
    errors.push("Phone is required");
  }
  if (!password) {
    errors.push("Password is required");
  }
  if (!diet) {
    errors.push("Diet is required");
  }

  if (errors.length > 0) {
    return res.status(400).json({ error: errors.join(", ") });
  }

  // Check if email already exists
  connection.query("SELECT * FROM users WHERE email = ?", [email], function(err, results) {
    if (err) {
      console.error("Error checking user existence: ", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length > 0) {
      return res.status(400).json({ error: "User with this email already exists" });
    }

    // If email doesn't exist, proceed with user registration
    var sql = "INSERT INTO users (name, email, phone, password, diet) VALUES (?, ?, ?, ?, ?)";
    var values = [name, email, phone, password, diet];

    connection.execute(sql, values, function(err, result) {
      if (err) {
        console.error("Error registering user: ", err);
        return res.status(500).json({ error: "Error registering user" });
      }

      const user = results;
      user_details = {
        name: user.name,
        email: user.email,
        phone: user.phone,
        diet: user.diet
      };

      console.log("User registered successfully", result);
      res.json({ message: 'User registered successfully', user: user_details });
    });
  });
});

module.exports = router;
