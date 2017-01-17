var express = require('express');
var app = express();

app.get('/', function (req, res) {
   var uid = req.query.id;
   res.send('Hello World, your uid = ' + uid);
});

app.get('/test', function (req, res) {
   var uid = req.query.id;
   res.send(uid);
});

var server = app.listen(1234, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});
