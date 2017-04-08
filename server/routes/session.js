const express = require('express');
const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = require('../config/secretKeys');
const passport = require('passport')

const router = express.Router();


router.post('/', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) {
      return res.status(401).json({errors: { form: 'username or password incorrect' }});
    }
    //Create the session
    req.login(user, function(err) {
      if (err) { return next(err); }
      return res.json(user);
    })
  })(req, res, next)
});


module.exports = router;
