/*! myStore-client, version: 1.1.4, 2014-06-14 */
var configLocal = {};

if (typeof WLJSX !== "undefined") {
    var wlInitOptions = {
        connectOnStartup: false,
        logger: {
            enabled: true,
            level: "debug",
            stringify: true,
            pretty: false,
            tag: {
                level: false,
                pkg: true
            },
            whitelist: [],
            blacklist: [],
            nativeOptions: {
                capture: false
            }
        },
        analytics: {
            enabled: false
        },
        onConnectionFailure: function() {
            alert("Připojení k serveru se nezdařilo.");
        }
    };
    if (window.addEventListener) {
        window.addEventListener("load", function() {
            WL.Client.init(wlInitOptions);
        }, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", function() {
            WL.Client.init(wlInitOptions);
        });
    }
    configLocal.serverUrl = "http://asimplia-stage.cloudapp.net:3000";
    console.log("Setup WL socket.io server to " + configLocal.serverUrl);
    function wlCommonInit() {}
}

if (window.location.href.indexOf("chrome-extension") !== -1) {
    configLocal.serverUrl = "http://asimplia-stage.cloudapp.net:3000";
    jQuery("html").width("400px").height("800px");
}

if (window.location.href.indexOf("android_asset") !== -1) {
    configLocal.serverUrl = "http://asimplia-stage.cloudapp.net:3000";
}

Messages = {};