
var MemoryCache = function () {

	var DEFAULT_EXPIRE = 100;
	// in ms
	var expires = {
		'getShoppingCarts-called': 100
	};

	var cached = {};

	this.set = function (name, value) {
		cached[name] = {
			value: value,
			time: moment().valueOf()
		};
	};

	this.get = function (name) {
		if (typeof cached[name] === 'undefined')
			return null;

		var expire = typeof expires[name] === 'undefined' ?DEFAULT_EXPIRE :expires[name];
		var now = moment().valueOf();
		if (cached[name].time + expire < now)
			return null;

		return cached[name].value;
	};
};


myRetail.factory('memoryCache', function () {
	var instance = new MemoryCache();
	return instance;
});
