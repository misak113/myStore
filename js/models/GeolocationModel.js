
var GeolocationModel = function (socket) {
	this.socket = socket;
};

GeolocationModel.prototype.addApList = function (date, apList, callback) {
	this.socket.emit('/geolocation/add-ap-list', { date: date, apList: apList }, function () {
		callback();
	});
};

myRetail.factory('geolocationModel', function (socket) {
	var s = new GeolocationModel(socket);
	return s;
});
