const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/api/speed-test', controller.getInternetSpeed);

module.exports = router;
