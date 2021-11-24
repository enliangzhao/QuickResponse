const express = require('express');

const router = express.Router();

// Import Controllers
const StatController = require('../controllers/statistics');
// === User API routes ===

// Get (Search) announcement messages
router.post('/', StatController.getStat);
router.post('/months', StatController.getAllStat);

module.exports = router;