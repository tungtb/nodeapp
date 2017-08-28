'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    user_name: {
        type: String
    },
    password: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'suppend']
    },
    created_data: {
        type: Date
    }
});
// Compile model from schema
module.exports = mongoose.model('Users', UserSchema);