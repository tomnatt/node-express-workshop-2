var express = require('express');
var router = express.Router();
var conn = require('../db');

router.use(function(req, res, next) {
  if (req.query.name == 'jack') {
    next();
  } else {
    res.end('no permission');
  }
})

router.get('/', function(req, res) {
  res.render('admin');
});

module.exports = router;