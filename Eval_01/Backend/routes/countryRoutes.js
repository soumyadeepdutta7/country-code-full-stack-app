const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');

router.get('/:currencyCode', countryController.getCountryByCurrencyCode);

module.exports = router;
