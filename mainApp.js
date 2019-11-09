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
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var n_users = 0;
app.use(express.static("assets"));
em.on('postreq',function write_listner(user_details) {
	console.log(user_details);
	fs.appendFile("users.json",JSON.stringify(user_details)+"\n", function (err) {
		console.log(err);
	});
	
});

app.get('/',function(req,res){
	res.sendFile(__dirname+"//index.html");
});

app.get('/signup',function(req,res){
	res.sendFile(__dirname+"//signup.html");
});

app.post('/signup_success', function (req,res) {
	var firstname = req.body.Firstname;
	var lastname = req.body.Lastname;
	var email = req.body.Email;
	var user_details = {
			"name":firstname,
			"lastname":	lastname,
			"email":email
	};
	em.emit('postreq',user_details);
	res.end();

});

var server = app.listen(8081, function(req,res){	
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server listening at localhost:8081");
});