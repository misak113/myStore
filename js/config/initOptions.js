var configLocal = {};

// @todo for quick server setup
if (typeof WLJSX !== 'undefined') {
    var wlInitOptions = {
        connectOnStartup : false,
        logger: {
            enabled: true
        },
        onConnectionFailure: function () {
            alert('Připojení k serveru se nezdařilo.');
        }
    };
    
    WLJSX.bind(window, "load", function() {
        WL.Client.init(wlInitOptions);
    });
    configLocal.serverUrl = 'http://localhost:80';

    function wlCommonInit(){
        // Common initialization code goes here
    };
}

if (window.location.href.indexOf('chrome-extension') !== -1) {
    configLocal.serverUrl = 'http://localhost:80';
    jQuery('html').width('400px').height('800px');
}