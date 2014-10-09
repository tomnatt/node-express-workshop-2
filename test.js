var request = require('supertest');
var app = require('./app');

var finalFn = function(err, res) {
  if (err) throw err;
};

request(app)
  .get('/')
  .expect(200)
  .end(finalFn);

request(app)
  .get('/admin')
  .expect(200)
  .expect('no permission')
  .end(finalFn);

request(app)
  .get('/admin?name=jack')
  .expect(200)
  .expect(function(res) {
    if (res.text.indexOf('Blog Admin') == -1) {
      return 'error';
    }
  })
  .end(finalFn);
