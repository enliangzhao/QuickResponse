var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Quick Responser' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Quick Responser' });
});

router.get('/post_report', function(req, res, next) {
  console.log("redirect to report");
  res.render('report');
});

module.exports = router;
