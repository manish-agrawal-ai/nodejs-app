var express = require('express');
var app = express();
var fs = require("fs");

app.get('/testing', function (req, res) {
      	
      res.end('testing');
})

app.get('/testing2', function (req, res) {
      console.log(req);	
      res.end('testing2');
})

var server = app.listen(6060, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
