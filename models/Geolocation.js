
var l = require('log-dispatch');
var crypto = require('crypto');

var Geolocation = function () {

};

Geolocation.prototype.setConnection = function (connection) {
	this.connection = connection;
};

Geolocation.prototype.insertWifiLog = function (device_id, date_recorded, callback) {
	var self = this;
	var sql = 'INSERT INTO wifi_log (device_id, date_recorded) VALUES($1::int, $2::timestamp);';
	self.connection.query(sql, [device_id, date_recorded], function (e, res) {
		if (e) return callback(e);
		self.connection.query("SELECT currval('wifi_log_wifi_log_id_seq') AS wifi_log_id;", function (e, res) {
			if (e) return callback(e);
			var wifiLog = {
				wifi_log_id: res['rows'][0]['wifi_log_id'],
				device_id: device_id,
				date_recorded: date_recorded
			};
			callback(null, wifiLog);
		});
	});
};

Geolocation.prototype.insertWifiLogAps = function (wifiLogAps, callback) {
	var self = this;
	var i = 0;
	var next = function () {
		return ++i;
	};
	var values = [];
	var params = [];
	wifiLogAps.forEach(function (wifiLogAp) {
		values.push('$'+next()+'::int, $'+next()+'::macaddr, $'+next()+'::text, $'+next()+'::real');
		params.push(parseInt(wifiLogAp.wifi_log_id));
		params.push(wifiLogAp.mac);
		params.push(wifiLogAp.ssid);
		params.push(parseFloat(wifiLogAp.signal_strength));
	});
	var sql = 'INSERT INTO wifi_log_ap (wifi_log_id, mac, ssid, signal_strength) VALUES ('+values.join('),(')+');';
	self.connection.query(sql, params, function (e, res) {
		if (e) return callback(e);
		callback(null, wifiLogAps);
	});
};

Geolocation.prototype.getDeviceByUuid = function (uuid, callback) {
	var self = this;
	var sql = 'SELECT * FROM device WHERE uuid = $1::text';
	self.connection.query(sql, [uuid], function (e, res) {
		if (res.rows.length == 0) {
			return callback();
		}
		var device = res.rows[0];
		callback(null, device);
	});
};

var getMacHash = function (mac) {
	var shasum = crypto.createHash('sha1');
	shasum.update(mac);
	return shasum.digest('hex');
};

Geolocation.prototype.insertDevice = function (device, callback) {
	var self = this;
	var sql = 'INSERT INTO device (mac, mac_hash, uuid, imei, platform, model) VALUES($1::macaddr, $2::text, $3::text, $4::text, $5::text, $6::text);';
	self.connection.query(sql, [device.mac, getMacHash(device.mac), device.uuid, device.imei, device.platform, device.model], function (e, res) {
		if (e) return callback(e);
		self.connection.query("SELECT currval('device_device_id_seq') AS device_id;", function (e, res) {
			if (e) return callback(e);
				device.device_id = res['rows'][0]['device_id'];
			callback(null, device);
		});
	});
};

Geolocation.prototype.updateDeviceById = function (device_id, device, callback) {
	var self = this;
	var sql = 'UPDATE device SET mac=$1::macaddr, mac_hash=$2::text, uuid=$3::text, imei=$4::text, platform=$5::text, model=$6::text WHERE device_id = $7::int;';
	self.connection.query(sql, [device.mac, getMacHash(device.mac), device.uuid, device.imei, device.platform, device.model, device_id], function (e, res) {
		if (e) return callback(e);
		device.device_id = device_id;
		callback(null, device);
	});
};

module.exports = exports = new Geolocation();