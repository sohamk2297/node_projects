/**
 * Friday, 8th November 2019 
 * Main application file of juneworks.io
 * Let's begin
 */

var express = require('express');
var app = express();
var fs = require('fs');
var events = require('events');
var em = new events.EventEmitter();

app.use(express.static("assets"));
app.get('/',function(req,res){
	res.sendFile(__dirname+"//index.html");
});
app.get('/signup',function(req,res){
	res.sendFile(__dirname+"//signup.html");
});

var server = app.listen(8081, function(req,res){
	
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server listening at localhost:8081");
});