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
  res.render('admin', { errors : [] });
});

router.post('/new', function(req, res) {
  var title = req.body.title;
  var content = req.body.content;

  var errors = [];
  if (!title) errors.push('NO TITLE');
  if (!content) errors.push('NO CONTENT');

  if (errors.length > 0) {
    res.render('admin', { errors: errors });
    return;
  }

  // title and content are defined
  conn(function(db, doneCb) {

    var collection = db.collection('posts');

    collection.insert({
      title: title,
      content: content
    }, function(err, post) {

      err = err ? [err] : [];
      res.render('admin', { errors: err });
      doneCb();

    })

  });
});

module.exports = router;