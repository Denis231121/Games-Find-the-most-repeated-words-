const express = require('express');
const router = express.Router();
const userService = require('./userService');

router.get('/profile', (req, res) => {
    userService.getUserProfile(req.session.user, res);
});

module.exports = router;
