'use strict';
var mongoose = require('mongoose');
var Users = require('../models/userModel');

exports.addUser = function (req, res) {
    console.log('params', req.body);
    var user = new Users({ user_name: req.body.user_name, password: req.body.password });
    user.save(function (err, info) {
        console.log(info);
        if (err) return console.error(err);
        res.json({ status: 'OK', id: info._id });
    });
};