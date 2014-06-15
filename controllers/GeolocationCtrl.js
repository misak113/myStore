
var l = require('log-dispatch');
var _ = require('underscore');
var moment = require('moment');
var Geolocation = require('../models/Geolocation');


module.exports = exports = function (socket, user) {
	return new GeolocationCtrl(socket, user);
};

var gets = {};

var GeolocationCtrl = function (socket, user) {
	var self = this;
	this.user = user;

	socket.on('/geolocation/add-ap-list', function (data, callback) { 
		self.addApList(data, function (e) {
			if (e) {
				l.error(e);
			}
		}); 
	});
};

GeolocationCtrl.prototype.addApList = function (data, callback) {
	var date = moment(data.date).toDate();
	var apList = data.apList;

	Geolocation.insertWifiLog(this.user.device_id, date, function (e, wifiLog) {
		if (e) return callback(e);
		apList.forEach(function (wifiLogAp) {
			wifiLogAp.wifi_log_id = wifiLog.wifi_log_id;
		});
		Geolocation.insertWifiLogAps(apList, function (e, wifiLogAps) {
			if (e) return callback(e);
			callback(null);
		});
	});

};
