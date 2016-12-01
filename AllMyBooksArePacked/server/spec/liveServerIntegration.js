var request = require('request');
var expect = require('../../node_modules/chai/chai').expect;
var server = require('../server').server;

describe('server', function() {
  it('should respond to GET requests with a 200 status code', function(done) {
    request('http://127.0.0.1:3000', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});