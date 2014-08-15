var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var app = express();

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/notes-development');

app.use(bodyparser.json());
require('./routes/note-routes')(app);

var server = http.createServer(app);

server.listen(3000, function() {
  console.log('server running on port 3000');
});
