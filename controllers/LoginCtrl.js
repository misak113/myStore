
var l = require('log-dispatch');
var _ = require('underscore');
var crypto = require('crypto');
var User = require('../models/User');


module.exports = exports = function (socket) {
	return new LoginCtrl(socket);
};

var gets = {};

var LoginCtrl = function (socket) {

	socket.on('/login', this.login);
	socket.on('/register', this.register);
};

var encryptPassword = function (password, salt) {
	var shasum = crypto.createHash('sha1');
	shasum.update(password);
	shasum.update('+');
	shasum.update(salt);
	return shasum.digest('hex');
};

var randomHash = function () {
	var shasum = crypto.createHash('sha1');
	shasum.update("XXX"+Math.random());
	return shasum.digest('hex');
};

LoginCtrl.prototype.login = function (data, callback) {
	var username = data.username;
	var password = data.password;
	l.d('Login '+username);

	User.getByUsername(username, function (e, user) {
		if (e) {
			return callback(e);
		}
		if (!user) {
			return callback(new Error('User does not exists'));
		}
		var passwordHashed = encryptPassword(password, user.salt);
		l.d(passwordHashed);
		if (passwordHashed !== user.password) {
			return callback(new Error('Bad credentials'));
		}
		var verificationHash = randomHash();
		user.verificationHashes.push(verificationHash);
		user.save(function (e) {
			if (e) {
				return callback(e);
			}
			callback(null, verificationHash);
		});
	});
};

LoginCtrl.prototype.register = function (data, callback) {
	User.getByUsername(data.username, function (e, user) {
		if (user) {
			var e = new Error();
			e.message = 'Uživatel s tímto uživatelským jménem již existuje';
			callback(e);
			return;
		}
		var user = new User();
		user.firstName = data.firstName;
		user.lastName = data.lastName;
		user.email = data.email;
		user.username = data.username;
		var salt = randomHash();
		user.salt = salt;
		user.password = encryptPassword(data.password, salt);
		user.save(function (e) {
			callback(e, user.toObject());
		});
	});
};
