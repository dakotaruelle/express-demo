const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express', logged_in: req.session.loggedIn });
});

router.post('/login', (req, res, next) => {
  req.session.loggedIn = true;

  res.redirect('/');
});

module.exports = router;
