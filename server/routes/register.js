const express = require('express');
const router = express.Router();
const connection = require('../database');

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
  connection.query("SELECT * FROM User WHERE email = ?", [email], function(err, results) {
    if (err) {
      console.error("Error checking user existence: ", err);
      return res.status(500).json({ error: "Database error" });
    }
    
    if (results.length > 0) {
      return res.status(400).json({ error: "User with this email already exists" });
    }

    // If email doesn't exist, proceed with user registration
    // Insert into User table
    connection.query("INSERT INTO User (name, email, contactno) VALUES (?, ?, ?)", [name, email, phone], function(err, result) {
      if (err) {
        console.error("Error inserting into User table: ", err);
        return res.status(500).json({ error: "Error registering user in User table" });
      }

      // Retrieve the last inserted user_id
      const userId = result.insertId;

      // Insert into Student table
      connection.query("INSERT INTO Student (dietary_pref, password, user_id) VALUES (?, ?, ?)", [diet, password, userId], function(err, result) {
        if (err) {
          console.error("Error inserting into Student table: ", err);
          return res.status(500).json({ error: "Error registering user in Student table" });
        }

        console.log("User registered successfully", result);
        res.json({ message: 'User registered successfully', user: { name, email, phone, diet } });
      });
    });
  });
});

module.exports = router;
