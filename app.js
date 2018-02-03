
var http = require('http');

//var fs = require('fs');
var express = require('express');

var app = express(); 
var port = 3000;

app.post('#', function(req, res){

});

app.get('/#', function(req, res){
    res.send('App is listening');
});

app.listen(3000);

/*
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var path = re.url;
}

server.listen(port, function() {
    console.log('Server listening on http://localhost:' + port);

});




*/