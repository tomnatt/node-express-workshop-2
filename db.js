var MongoClient = require('mongodb').MongoClient;

var MONGO_USER = 'tom';
var MONGO_PWD = 'test';
var MONGOHQ_URL = 'mongodb://' + MONGO_USER + ':' + MONGO_PWD + '@linus.mongohq.com:10094/node-workshop';

module.exports = function(fn) {
  MongoClient.connect(MONGOHQ_URL, function(err, db) {
    if (!err) {
      fn(db, function() {
        db.close();
      });
    }
  });
};
