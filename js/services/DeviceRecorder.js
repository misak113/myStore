
var DeviceRecorder = function (geolocationModel) {
	this.geolocationModel = geolocationModel;
};

DeviceRecorder.prototype.storeDevice = function(callback) {
	l.log(window.device);
	if (typeof window.device === 'undefined') {
		return callback(new Error('Not supported operation'));
	}
	var appDevice = {
		mac: '00:00:'+Math.round(Math.random()*100)+':'+Math.round(Math.random()*100)+':'+Math.round(Math.random()*100)+':'+Math.round(Math.random()*100),
		uuid: window.device.uuid,
		imei: Math.round(Math.random()*10000000),
		platform: window.device.platform,
		model: window.device.model
	};
	this.geolocationModel.updateDevice(appDevice, function () {
		callback();
	});
};

myRetail.factory('deviceRecorder', function (geolocationModel) {
	var s = new DeviceRecorder(geolocationModel);
	return s;
});
