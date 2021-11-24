const express = require('express');

const router = express.Router();

// Import Controllers
const StatController = require('../controllers/statistics');

// // Auth
// const { checkAuth } = require('../../middlewares/auth');

// // Privilege
// const {
//   checkPostAnnouncementPrivilege,
// } = require('../../middlewares/privilege');

// === User API routes ===

// Get (Search) announcement messages
router.post('/', StatController.getStat);
router.post('/months', StatController.getAllStat);

// // store new message
// router.post(
//   '/',
//   checkAuth,
//   checkPostAnnouncementPrivilege,
//   PostAnmController.addAnnouncement,
// );

module.exports = router;