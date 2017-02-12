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

router.get('/', function (req, res, next) {body
  console.log(req);
  res.json(json);
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.json(json);
});

module.exports = router;
