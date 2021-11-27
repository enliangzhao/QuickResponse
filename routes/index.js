var express = require('express');
var router = express.Router();
const reportController = require('../controller/reportController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Quick Responser' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Quick Responser' });
});
router.get('/statistics', function(req, res, next) {
  res.render('statistics', { title: 'Quick Responser' });
});

router.get('/post_report', function(req, res, next) {
  console.log("redirect to report");
  res.render('report');
});

router.get('/access_crime_history', function(req, res, next) {
  console.log("redirect to crime history");
  res.render('crimehistory');
});

router.post('/createReport',reportController.postReport)

router.get('/user_profile', function(req, res, next) {
  console.log("redirect to user profile");
  res.render('profile');
});

router.get('/event_detail', function(req, res, next) {
  console.log("redirect to event detail");
  console.log(req.params);
  res.render('eventDetail');
});

module.exports = router;
