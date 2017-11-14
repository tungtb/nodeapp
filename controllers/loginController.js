'use strict';
var mongoose = require('mongoose');
var Users = require('../models/userModel');

exports.doLogin = function (req, res) {
	console.log('Received a request');
	Users.find({ user_name: req.body.user_name, password: req.body.password }, function (err, user) {
		console.log(user);
		if (err)
			res.send(err);
		if (user.length > 0) {
			res.json({status: 'OK', data: user});
		} else {
			res.json({status: 'NG', data: {message: 'User not found'}});
		}
	});
};