
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
		self.connection.query('SELECT currval(pg_get_serial_sequence("wifi_log","wifi_log_id"));', function (e, res) {
			if (e) return callback(e);
			var wifiLog = {
				wifi_log_id: res[0],
				device_id: device_id,
				date_recorded: date_recorded
			};
			callback(null, wifiLog);
		});
	});
};

Geolocation.prototype.insertWifiLogAps = function (wifiLogAps, callback) {
	
};


module.exports = exports = new Geolocation();