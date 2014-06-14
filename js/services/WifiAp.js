
var WifiAp = function () {

};

WifiAp.prototype.getApList = function(callback) {
	if (typeof cordova === 'undefined') {
		return callback(new Error('Not supported operation'));
	}
	cordova.exec(function (res) {
		callback(null, res);
	}, function (res) {
		var e = new Error();
		e.data = res;
		callback(e);
	}, 'WifiAp', 'getApList', []);
};

myRetail.factory('wifiAp', function () {
	var s = new WifiAp();
	return s;
});
