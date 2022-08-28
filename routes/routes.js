const express = require('express');
const router = express.Router();
const { calculateDisselUsageForDistance, probabilityOfUnitInjectorFail } = require('../controllers/controllers');

router.route('/calculateDisselUsageForDistance').get(calculateDisselUsageForDistance);
router.route('/probabilityOfUnitInjectorFail').get(probabilityOfUnitInjectorFail);

module.exports = router;
