var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/login', function(req, res, next) {
  const {email,password} = req.body
  console.log(email)
  console.log(password)
  // get user from database (email, password)
  // if (user) res.json(user);
  // else res.json({ error: 'User not found' });

  res.json({ okay: 'Express' });
});

module.exports = router;
