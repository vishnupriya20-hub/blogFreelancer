const express = require('express');
const router = express.Router();
const { add } = require('../controllers/calculateController');

router.post('/add', add);


module.exports = router;