
var LocationDispatcher = function (wifiAp, geolocationModel) {
	this.wifiAp = wifiAp;
	this.geolocationModel = geolocationModel;
};

LocationDispatcher.prototype.storeLocation = function (callback) {
	var _this = this;
	_this.wifiAp.getApList(function (e, apList) {
		if (e) {
			return callback();
		}
		var now = moment().format();
		_this.geolocationModel.addApList(now, apList, function () {
			callback();
		});
	});
};

myRetail.factory('locationDispatcher', function (wifiAp, geolocationModel) {
	var s = new LocationDispatcher(wifiAp, geolocationModel);
	return s;
});
