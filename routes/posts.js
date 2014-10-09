var express = require('express');
var router = express.Router();
var conn = require('../db');
var ObjectID = require('mongodb').ObjectID;

router.get('/:id', function(req, res) {

  // method converts string id to MongoId object
  var id = ObjectID(req.params.id);
  // pretend we've done some param checking

  conn(function(db, doneCb) {
    var collection = db.collection('posts');
    collection.findOne({ _id: id }, function(err, post) {
      res.render('post', { post: post });
      doneCb();
    })
  })

});

module.exports = router;