
var wlInitOptions = {
    connectOnStartup : false,
    logger: {
    	enabled: true
    },
    onConnectionFailure: function () {
    	alert('Připojení k serveru se nezdařilo.');
    }
};

if (typeof WLJSX !== 'undefined') {
	WLJSX.bind(window, "load", function() {
	    WL.Client.init(wlInitOptions);
	});
}

//Worklight comes with the jQuery framework bundled inside. If you do not want to use it, please comment out the line below.
//window.$ = window.jQuery = WLJQ;

function wlCommonInit(){
	// Common initialization code goes here
};
