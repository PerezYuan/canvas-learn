var express = require('express');
var router = express.Router();

var json = {
  "employees": [
    {
      "firstName": "Bill",
      "lastName": "Gates"
    },
    {
      "firstName": "George",
      "lastName": "Bush"
    },
    {
      "firstName": "Thomas",
      "lastName": "Carter"
    },
  ]
}

router.get('/', function (req, res, next) {
  res.json(json);
});

router.post('/', function(req, res, next) {
  // 两种获取方式
  console.log(req.body.fname + " " + req.body.lname);
  console.log(req.param('fname') + " " + req.param('lname'));
  // 也获取get上的数据
  res.json(json);
});

module.exports = router;
