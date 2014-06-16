
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
	socket.on('/geolocation/update-device', function (data, callback) { 
		self.updateDevice(data, function (e) {
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

GeolocationCtrl.prototype.updateDevice = function (device, callback) {
	var self = this;
	l.d('update-device');
	l.d(device);
	var updateUserDevice = function (device_id) {
		self.user.device_id = device_id;
		self.user.deviceLogs.push({ device_id: device_id, date_recorded: moment().toDate() });
		self.user.save(function (e) {
			if (e) return callback(e);
			callback();
		});
	};
	Geolocation.getDeviceByUuid(device.uuid, function (e, existingDevice) {
		if (e) return callback(e);
		if (existingDevice) {
			Geolocation.updateDeviceById(existingDevice.device_id, device, function (e, device) {
				if (e) return callback(e);
				updateUserDevice(existingDevice.device_id);
			});
		} else {
			Geolocation.insertDevice(device, function (e, device) {
				if (e) return callback(e);
				updateUserDevice(device.device_id);
			});
		}
	});
};
