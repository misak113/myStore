/*! myStore-client, version: 1.1.4, 2014-06-14 */
var AuthDisp = function($route, $timeout, userModel, $location, messageDisp, socket, offlineStorage) {
    var self = this;
    this.getVerificationHash = function() {
        return offlineStorage.get("verificationHash");
    };
    this.setVerificationHash = function(verificationHash) {
        offlineStorage.set("verificationHash", verificationHash);
        this.connect();
    };
    socket.on("connection", function(data) {
        this.connect();
    });
    this.connect = function() {
        var verificationHash = self.getVerificationHash();
        socket.emit("verificationHash", verificationHash);
    };
    var loginCtrls = [ "LoginCtrl" ];
    var allowedCtrls = [ "LoginCtrl", "MenuCtrl", "MessagesCtrl" ];
    this.checkAuth = function(next) {
        var loggedIn = !!self.getVerificationHash();
        if (loggedIn === false) {
            var currentCtrl = typeof $route.current !== "undefined" && typeof $route.current.$$route !== "undefined" ? $route.current.$$route.controller ? $route.current.$$route.controller.name : null : null;
            if (!_.contains(allowedCtrls, currentCtrl)) {
                $location.path("/login");
                messageDisp.flash("Byl jste automaticky odhlášen. Přihlaste se znovu.", "warning");
                $scope.$apply();
            }
        }
        if (typeof next === "function") next(loggedIn);
    };
    this.startControl = function() {
        interval(self.checkAuth, 2e3);
    };
    var interval = function(fn, time) {
        $timeout(function() {
            fn(function() {
                interval(fn, time);
            });
        }, time);
    };
    this.control = function(next, current) {
        var nextCtrl = typeof next !== "undefined" && typeof next.$$route !== "undefined" ? next.$$route.controller ? next.$$route.controller.name : null : null;
        var currentCtrl = typeof current !== "undefined" && typeof current.$$route !== "undefined" ? current.$$route.controller ? current.$$route.controller.name : null : null;
        var loggedIn = !!self.getVerificationHash();
        if (loggedIn !== false) {
            if (_.contains(loginCtrls, nextCtrl)) {
                $location.path("/home");
            }
        } else {
            if (_.contains(allowedCtrls, nextCtrl)) return;
            $location.path("/login");
            if (_.contains(allowedCtrls, currentCtrl)) {
                messageDisp.flash("Není možné používat aplikaci, pokud nejste přihlášen.", "warning");
            } else if (!_.contains(allowedCtrls, nextCtrl)) {
                messageDisp.flash("Byl jste automaticky odhlášen. Přihlaste se znovu.", "warning");
            }
        }
    };
};

myRetail.factory("authDisp", function($route, $timeout, userModel, $location, messageDisp, socket, offlineStorage) {
    var instance = new AuthDisp($route, $timeout, userModel, $location, messageDisp, socket, offlineStorage);
    return instance;
});

var LoadingDisp = function(pullDown) {
    var loading = false;
    this.loading = function(status, abortCallback) {
        if (status === true) {
            if (loading === true) return abortCallback();
            loading = true;
        } else {
            loading = false;
        }
    };
    this.onReload = function(callback) {};
};

myRetail.factory("loadingDisp", function(pullDown) {
    return new LoadingDisp(pullDown);
});

var LocationDispatcher = function(wifiAp, geolocationModel) {
    this.wifiAp = wifiAp;
    this.geolocationModel = geolocationModel;
};

LocationDispatcher.prototype.storeLocation = function(callback) {
    var _this = this;
    _this.wifiAp.getApList(function(e, apList) {
        if (e) {
            return callback();
        }
        var now = moment().format();
        _this.geolocationModel.addApList(now, apList, function() {
            callback();
        });
    });
};

myRetail.factory("locationDispatcher", function(wifiAp, geolocationModel) {
    var s = new LocationDispatcher(wifiAp, geolocationModel);
    return s;
});

var MemoryCache = function() {
    var DEFAULT_EXPIRE = 100;
    var expires = {
        "getShoppingCarts-called": 100
    };
    var cached = {};
    this.set = function(name, value) {
        cached[name] = {
            value: value,
            time: moment().valueOf()
        };
    };
    this.get = function(name) {
        if (typeof cached[name] === "undefined") return null;
        var expire = typeof expires[name] === "undefined" ? DEFAULT_EXPIRE : expires[name];
        var now = moment().valueOf();
        if (cached[name].time + expire < now) return null;
        return cached[name].value;
    };
};

myRetail.factory("memoryCache", function() {
    var instance = new MemoryCache();
    return instance;
});

var MessageDisp = function(_t, notificationModel) {
    this.flash = function(text, type) {
        var message = {
            title: _t("Zpráva aplikace"),
            created: true,
            viewed: false,
            type: type,
            text: _t(text),
            settings: {},
            image: "images/messages/type-app.png"
        };
        notificationModel.addMessage(message);
    };
    this.undo = function(text, ctrl, fn, args) {
        var message = {
            title: _t("Vrácení změn"),
            created: true,
            viewed: false,
            type: "info",
            text: _t(text),
            settings: {
                type: "button",
                ctrl: ctrl,
                fn: fn,
                args: args,
                btnIcon: "icon-new icon-unshare"
            },
            image: "images/messages/type-undo.png"
        };
        notificationModel.addMessage(message);
    };
};

myRetail.factory("messageDisp", function(_t, notificationModel) {
    var messageDisp = new MessageDisp(_t, notificationModel);
    return messageDisp;
});

var Native = function() {
    this.ready = function() {
        return typeof WLJSX !== "undefined";
    };
    this.WL = window.WL;
};

myRetail.factory("native", function() {
    var instance = new Native();
    return instance;
});

var OfflineStorage = function(shoppingCartModel, notificationModel, offerModel, purchaseModel) {
    var self = this;
    var storedFunctions = [ {
        "class": shoppingCartModel,
        method: "getShoppingCart"
    }, {
        "class": shoppingCartModel,
        method: "getShoppingCarts"
    }, {
        "class": notificationModel,
        method: "getNotifications"
    }, {
        "class": offerModel,
        method: "getOffers"
    }, {
        "class": offerModel,
        method: "getOffer"
    }, {
        "class": purchaseModel,
        method: "getPurchases"
    }, {
        "class": purchaseModel,
        method: "getPurchase"
    } ];
    var getClassName = function(obj) {
        if (obj.className) return obj.className;
        if (typeof obj === "object" && typeof obj.__proto__ === "object" && typeof obj.__proto__.constructor === "function") {
            try {
                var className = /\W*function\s+([\w\$]+)\(/.exec(obj.__proto__.constructor.toString())[1];
                if (className !== "Object") return className;
            } catch (e) {}
            try {
                return CryptoJS.MD5(obj.__proto__.constructor.toString());
            } catch (e) {}
        }
        try {
            return CryptoJS.MD5(obj.toString());
        } catch (e) {
            return null;
        }
    };
    this.storeAll = function() {
        _.forEach(storedFunctions, function(cf) {
            var fn = cf["class"][cf.method];
            cf["class"][cf.method] = function() {
                var args = Array.prototype.slice.call(arguments, 0);
                var key = "store-function-arguments-" + getClassName(cf["class"]) + "-" + cf.method;
                angular.forEach(args, function(arg) {
                    key += "-" + (typeof arg === "string" ? arg : CryptoJS.MD5(arg.toString()));
                });
                var callback = args[args.length - 1];
                if (typeof callback === "function") {
                    var storedArguments = self.get(key);
                    if (storedArguments) {
                        var selfFunc = this;
                        _.defer(function() {
                            callback.apply(selfFunc, storedArguments);
                        });
                    }
                    args[args.length - 1] = function() {
                        var args = Array.prototype.slice.call(arguments, 0);
                        self.set(key, args);
                        callback.apply(this, args);
                    };
                }
                fn.apply(this, args);
            };
        });
    };
    var storage = window.localStorage;
    this.set = function(name, value) {
        storage[name] = angular.toJson({
            value: value
        });
    };
    this.get = function(name, defaultValue) {
        if (typeof defaultValue === "undefined") defaultValue = null;
        if (typeof storage[name] === "undefined") return defaultValue;
        try {
            var values = angular.fromJson(storage[name]);
            return values.value;
        } catch (e) {
            return defaultValue;
        }
    };
};

myRetail.factory("offlineStorage", function(shoppingCartModel, notificationModel, offerModel, purchaseModel) {
    var instance = new OfflineStorage(shoppingCartModel, notificationModel, offerModel, purchaseModel);
    return instance;
});

var Translator = function() {
    this.translate = function(text) {
        return text;
    };
};

myRetail.factory("translator", function() {
    var translator = new Translator();
    return translator;
});

myRetail.factory("_t", function(translator) {
    return translator.translate;
});

var WifiAp = function() {};

WifiAp.prototype.getApList = function(callback) {
    if (typeof cordova === "undefined") {
        return callback(new Error("Not supported operation"));
    }
    cordova.exec(function(res) {
        callback(null, res);
    }, function(res) {
        var e = new Error();
        e.data = res;
        callback(e);
    }, "WifiAp", "getApList", []);
};

myRetail.factory("wifiAp", function() {
    var s = new WifiAp();
    return s;
});

myRetail.factory("config", function() {
    var config = {
        serverUrl: "",
        baseUrl: ""
    };
    config = _.extend(config, configLocal);
    return config;
});

angular.module("filters", []).filter("timeLeft", function() {
    return function(input) {
        if (!input) return "unknown";
        var time = moment(input).fromNow(true);
        return time;
    };
}).filter("salePercentage", function() {
    return function(input) {
        if (!input) return "-";
        return Math.round((1 - input) * 100) + "%";
    };
}).filter("price", function() {
    return function(input, currency) {
        var curs = {
            czk: "Kč",
            eur: "€"
        };
        return (Math.round(input * 100) / 100 + "").replace(".", ",") + " " + (curs[currency] || "-");
    };
}).filter("formatDate", function() {
    return function(input, format) {
        return moment(input).format(format);
    };
}).filter("_", function(_t) {
    return function(text) {
        return text;
    };
});