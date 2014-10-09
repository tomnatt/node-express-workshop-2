var express = require('express');
var router = express.Router();
var conn = require('../db');

router.get('/', function(req, res) {
  res.render('admin');
});

module.exports = router;