'use strict';
var mongoose = require('mongoose');
var config = require('../config/config');

exports.connect = function () {
	mongoose.connect(config.dbHost, {useMongoClient: true}, function (err, db) {
		if (!err) {
			console.log("We are connected to mongodb");
		}else{
			console.log("mongodb error: ", err);
		}
	});
}
