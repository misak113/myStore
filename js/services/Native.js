
var Native = function () {

	this.ready = function () {
		return typeof WLJSX !== 'undefined';
	};


	this.WL = window.WL;

};

myRetail.factory('native', function () {
	var instance = new Native();
	return instance;
});
