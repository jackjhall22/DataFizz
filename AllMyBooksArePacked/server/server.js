var express = require('express');
var Path = require('path');
var cheerio = require('cheerio');
var fs = require('fs');
var books = [];
var $;

var routes = express.Router();
var assetFolder = Path.resolve(__dirname, '../client');
routes.use(express.static(assetFolder));


routes.get('/getBooks', function(req, res) {
  res.status(200).send(books);
});

//The catch all route to serve files like bootstrap
routes.get('/*', function(req, res) {
  req.url = '..' + req.url;
  res.sendFile(Path.resolve(__dirname, req.url ));
});

if (process.env.NODE_ENV !== 'test') {

  // We're in development or production mode;
  // create and run a real server.
  var app = express();
  var port = process.env.PORT || 3000;
  var ip = "127.0.0.1";
  // Mount our main router
  app.use('/', routes);

  app.listen(port, ip);
  console.log("Listening on http://" + ip + ":" + port);
  console.log("yup I'm listening!!", ip, port)
  
  
} else {
  // We're in test mode; make this file importable instead.
  module.exports = routes;
}