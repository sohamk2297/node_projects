/**
 * Friday, 8th November 2019 
 * Main application file of juneworks.io
 * Let's begin
 */

var express = require('express');
var app = express();

app.get('/',function(req,res){

	res.send("<h3>HELLO WORLD !</h3>");
});

var server = app.listen(8081, function(req,res){
	
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server listening at localhost:8081");
});