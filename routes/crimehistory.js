const express = require('express');

const router = express.Router();

// Import Controllers
const crimehistoryController = require('../controller/crimehistoryController');
// === User API routes ===

// Get (Search) announcement messages
router.post('/search_result', crimehistoryController.getResult);

module.exports = router;