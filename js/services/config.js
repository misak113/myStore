

myRetail.factory('config', function () {
	var config = {
			serverUrl: '',
			baseUrl: ''
	};
	config = _.extend(config, configLocal);
	return config;
});
