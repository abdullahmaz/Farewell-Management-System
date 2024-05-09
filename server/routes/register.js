var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/register', function(req, res) {
  const {name, email, phone, password, diet} = req.body
  console.log(name)
  console.log(email)
  console.log(phone)
  console.log(password)
  console.log(diet)
  // get user from database (email, password)
  // if (user) res.json(user);
  // else res.json({ error: 'User not found' });

  res.json({ okay: 'Express' });
});

module.exports = router;
