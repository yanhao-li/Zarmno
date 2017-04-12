const express = require('express');
const validateInput = require('../shared/validations/signup');
const bcrypt = require('bcrypt');
const db = require('../models');
const router = express.Router();


// User Register: Create a user
router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);
  if (isValid) {
    const { email, password, role } = req.body;
    const passwordDigest = bcrypt.hashSync(password, 10);

    db.User.build({ email, passwordDigest, role }).save()
      .then(() => res.json({ success: true }))
      .catch((err) => res.status(500).json({ errors: err }));
  } else {
    res.status(400).json(errors);
  }
});

module.exports = router;