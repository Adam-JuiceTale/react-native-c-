//var
var express = require('express');
var app = express();
var serv = require('http').Server(app);
var io = require('socket.io')(serv,{});

//express
app.get('/',function(req, res) {
	res.sendFile(__dirname + '/index.html');
});
app.use('',express.static(__dirname + ''));

serv.listen(2000);