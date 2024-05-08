var express = require('express');
var router = express.Router();

router.post('/login', function (req, res, next) {
  const { email, password } = req.body

  // get user from database (email, password)
  // if (user) res.json(user);
  // else res.json({ error: 'User not found' });

  res.json({ okay: 'Express' });
});

router.post('/signup', function (req, res, next) {
  const { email, password, firstname, lastname } = req.body

  res.json({ email, password, firstname, lastname });
});
module.exports = router;
