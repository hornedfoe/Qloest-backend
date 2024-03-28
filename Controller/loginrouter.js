const express = require("express");

let router = express.Router();

const{ login, register } = require('../Service/LoginService')

router.post('/register',register);
router.post('/login',login);

module.exports = router;