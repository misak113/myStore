
var mongoose = require('mongoose');
var l = require('log-dispatch');
var _ = require('underscore');
var moment = require('moment');

var schema = mongoose.Schema({
	id: Number,
	firstName: String,
	lastName: String,
	username: String,
	password: String,
	salt: String,
	verificationHashes: [String],
	device_id: Number,
	deviceLogs: [{ 
		device_id: Number, 
		date_recorded: Date
	}]
});

var User = mongoose.model('User', schema);
exports = module.exports = User;

User.getByVerificationHash = function (verificationHash, cb) {
	User.findOne({ verificationHashes: verificationHash }, function (e, user) {
		if (e) {
			cb(e);
			return;
		}
		cb(null, user);
	});
};

User.getByUsername = function (username, cb) {
	User.findOne({ username: username }, function (e, user) {
		if (e) {
			cb(e);
			return;
		}
		cb(null, user);
	});
};
