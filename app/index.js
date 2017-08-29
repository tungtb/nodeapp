var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port
var mongodb = require('./models/mongo');
mongodb.connect();
var routes = require('./routes/routes');
routes(app, express); //register the route
app.listen(port);
console.log('Server started on port ' + port);