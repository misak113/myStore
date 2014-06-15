
var GeolocationModel = function (socket) {
	this.socket = socket;
};

GeolocationModel.prototype.addApList = function (date, apList, callback) {
	this.socket.emit('/geolocation/add-ap-list', { date: date, apList: apList }, function () {
		callback();
	});
};

GeolocationModel.prototype.updateDevice = function (device, callback) {
	this.socket.emit('/geolocation/update-device', device, function () {
		callback();
	});
};

myRetail.factory('geolocationModel', function (socket) {
	var s = new GeolocationModel(socket);
	return s;
});
