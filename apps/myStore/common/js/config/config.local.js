
var configLocal = {
	serverUrl: '',
	baseUrl: ''
};

if (typeof WLJSX !== 'undefined') {
	// @todo for quick server setup
	configLocal.serverUrl = 'http://mystore.jit.su:80';
}