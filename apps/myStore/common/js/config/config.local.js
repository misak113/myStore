
var configLocal = {
	serverUrl: '',
	baseUrl: ''
};

// @todo for quick server setup
if (typeof WLJSX !== 'undefined') {
	configLocal.serverUrl = 'http://mystore.jit.su:80';
}

if (window.location.href.indexOf('chrome-extension') !== -1) {
	configLocal.serverUrl = 'http://mystore.jit.su:80';
	jQuery('html').width('400px').height('800px');
}