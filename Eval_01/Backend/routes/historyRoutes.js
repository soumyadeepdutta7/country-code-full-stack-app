const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth, historyController.addHistory);
router.get('/', auth, historyController.getHistory);

module.exports = router;
