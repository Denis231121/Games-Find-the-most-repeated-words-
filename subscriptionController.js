const express = require('express');
const router = express.Router();
const subscriptionService = require('./subscriptionService');

router.get('/list', (req, res) => {
    subscriptionService.listSubscriptions(res);
});

module.exports = router;
