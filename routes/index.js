var express = require('express');
var router = express.Router();

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

module.exports = router;
