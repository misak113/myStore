
var l = require('log-dispatch');

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


module.exports = exports = new Geolocation();