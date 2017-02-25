var express = require('express')
var server = express()
 

server.use(express.static(__dirname + '/public'));

server.get('/', function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});
 
server.listen(8000);