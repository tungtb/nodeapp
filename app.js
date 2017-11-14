var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port
var mongodb = require('./models/mongo');
mongodb.connect();

var routes = require('./routes/routes');
routes(app, express); //register the route
app.listen(port);