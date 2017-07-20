var app = require('express')();
var MongoClient = require('mongodb').MongoClient;
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(3006, function(){
  	console.log('listening on *:3006');

	// Connect to the db
	MongoClient.connect("mongodb://103.53.231.204:27017/test", function(err, db) {
		console.log("tung", err, db);
	  if(!err) {
	    console.log("We are connected");
	  }
	});
});