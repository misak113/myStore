
var UserModel = function (socket) {
	this.className = 'UserModel';
	var self = this;

	this.WRONG_CREDENTIALS = 1;

	this.login = function (username, password, remember, callback) {
		socket.emit('/login', { username: username, password: password }, function (e, verificationHash) {
			callback(e, verificationHash);
		});
	};

	this.logout = function (callback) {
		callback();
	};

	this.register = function (email, username, password, firstName, lastName, callback) {
		var user = { 
			email: email, 
			username: username, 
			password: password, 
			firstName: firstName, 
			lastName: lastName 
		};
		socket.emit('/register', user, function (e, user) {
			callback(e, user);
		});
	};
};

myRetail.factory('userModel', function (socket) {
	var userModel = new UserModel(socket);
	return userModel;
});