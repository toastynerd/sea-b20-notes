var express = require('express');
var http = require('http');

var app = express();

app.get('/echo/:input1/:input2', function(req, res) {
  res.send({"input1" : req.params.input1, "input2" : req.params.input2});
});

app.get('/*', function(req, res) {
  res.status(404).send('not found');
});

app.use(express.static(__dirname + '/static'));

var server = http.createServer(app);

server.listen(3000, function() {
  console.log('server running on port 3000');
});
