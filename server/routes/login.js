const express = require('express');
const router = express.Router();
const connection = require('../database');
/* GET home page. */
router.post('/login', function(req, res, next) {
  const {email, password} = req.body;

  // First, try to log in as a Manager
  const managerQuery = `
    SELECT User.*, Student.dietary_pref
    FROM User 
    JOIN Student ON User.user_id = Student.user_id 
    JOIN Manager ON Student.student_id = Manager.student_id 
    WHERE User.email = ? AND Student.password = ?`;

  connection.query(managerQuery, [email, password], function(err, results) {
    if (err) {
      console.error("Error verifying manager: ", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length > 0) {
      const user = results[0];
      const user_details = {
        user_id: user.user_id,
        name: user.name,
        email: user.email,
        phone: user.contactno,
        diet: user.dietary_pref,
        type: 'manager'
      };

      console.log("Manager verified successfully");
      return res.json({ message: 'Manager verified successfully', user: user_details });
    } else {
      // If not a manager, try to log in as a Senior Student
      const seniorStudentQuery = `
        SELECT User.*, Student.dietary_pref, Student.student_id
        FROM User 
        JOIN Student ON User.user_id = Student.user_id 
        JOIN Senior_student ON Student.student_id = Senior_student.student_id 
        WHERE User.email = ? AND Student.password = ?`;

      connection.query(seniorStudentQuery, [email, password], function(err, results) {
        if (err) {
          console.error("Error verifying senior student: ", err);
          return res.status(500).json({ error: "Database error" });
        }

        if (results.length > 0) {
          const user = results[0];
          const user_details = {
            user_id: user.user_id,
            student_id: user.student_id,
            name: user.name,
            email: user.email,
            phone: user.contactno,
            diet: user.dietary_pref,
            type: 'senior student'
          };

          console.log("Senior Student verified successfully");
          res.json({ message: 'Senior Student verified successfully', user: user_details });
        } else {
          return res.status(400).json({ error: "Invalid email or password" });
        }
      });
    }
  });
});

module.exports = router;