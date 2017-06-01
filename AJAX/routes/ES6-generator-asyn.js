var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ES6-generator-asyn', { title: 'ES6-generator-asyn' });
});

module.exports = router;
