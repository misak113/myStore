/*! myStore-client, version: 1.1.4, 2014-06-07 */
var AuthDisp = function($route, $timeout, userModel, $location, messageDisp) {
    var self = this, loginCtrls = [ "LoginCtrl" ], allowedCtrls = [ "LoginCtrl", "MenuCtrl", "MessagesCtrl" ];
    this.checkAuth = function(next) {
        var loggedIn = userModel.isLoggedIn();
        if (loggedIn === !1) {
            var currentCtrl = "undefined" != typeof $route.current && "undefined" != typeof $route.current.$$route && $route.current.$$route.controller ? $route.current.$$route.controller.name : null;
            _.contains(allowedCtrls, currentCtrl) || ($location.path("/login"), messageDisp.flash("Byl jste automaticky odhlášen. Přihlaste se znovu.", "warning"), 
            $scope.$apply());
        }
        "function" == typeof next && next(loggedIn);
    }, this.startControl = function() {
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
        var nextCtrl = "undefined" != typeof next && "undefined" != typeof next.$$route && next.$$route.controller ? next.$$route.controller.name : null, currentCtrl = "undefined" != typeof current && "undefined" != typeof current.$$route && current.$$route.controller ? current.$$route.controller.name : null, loggedIn = userModel.isLoggedIn();
        if (loggedIn !== !1) _.contains(loginCtrls, nextCtrl) && $location.path("/home"); else {
            if (_.contains(allowedCtrls, nextCtrl)) return;
            $location.path("/login"), _.contains(allowedCtrls, currentCtrl) ? messageDisp.flash("Není možné používat aplikaci, pokud nejste přihlášen.", "warning") : _.contains(allowedCtrls, nextCtrl) || messageDisp.flash("Byl jste automaticky odhlášen. Přihlaste se znovu.", "warning");
        }
    };
};

myRetail.factory("authDisp", function($route, $timeout, userModel, $location, messageDisp) {
    var instance = new AuthDisp($route, $timeout, userModel, $location, messageDisp);
    return instance;
});

var LoadingDisp = function(pullDown) {
    var loading = !1;
    this.loading = function(status, abortCallback) {
        if (status === !0) {
            if (loading === !0) return abortCallback();
            loading = !0, pullDown.loading(!0), pullDown.element.bind("pullDownStopWorking", function() {
                loading = !1, pullDown.element.unbind("pullDownStopWorking"), abortCallback();
            });
        } else loading = !1, pullDown.loading(!1);
    }, this.onReload = function(callback) {
        pullDown.container.off("pullDown").on("pullDown", function() {
            callback();
        });
    };
};

myRetail.factory("loadingDisp", function(pullDown) {
    return new LoadingDisp(pullDown);
});

var MemoryCache = function() {
    var DEFAULT_EXPIRE = 100, expires = {
        "getShoppingCarts-called": 100
    }, cached = {};
    this.set = function(name, value) {
        cached[name] = {
            value: value,
            time: moment().valueOf()
        };
    }, this.get = function(name) {
        if ("undefined" == typeof cached[name]) return null;
        var expire = "undefined" == typeof expires[name] ? DEFAULT_EXPIRE : expires[name], now = moment().valueOf();
        return cached[name].time + expire < now ? null : cached[name].value;
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
            created: !0,
            viewed: !1,
            type: type,
            text: _t(text),
            settings: {},
            image: "images/messages/type-app.png"
        };
        notificationModel.addMessage(message);
    }, this.undo = function(text, ctrl, fn, args) {
        var message = {
            title: _t("Vrácení změn"),
            created: !0,
            viewed: !1,
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
        return "undefined" != typeof WLJSX;
    }, this.WL = window.WL;
};

myRetail.factory("native", function() {
    var instance = new Native();
    return instance;
});

var OfflineStorage = function(shoppingCartModel, notificationModel, offerModel, purchaseModel) {
    var self = this, storedFunctions = [ {
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
    } ], getClassName = function(obj) {
        if (obj.className) return obj.className;
        if ("object" == typeof obj && "object" == typeof obj.__proto__ && "function" == typeof obj.__proto__.constructor) {
            try {
                var className = /\W*function\s+([\w\$]+)\(/.exec(obj.__proto__.constructor.toString())[1];
                if ("Object" !== className) return className;
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
                var args = Array.prototype.slice.call(arguments, 0), key = "store-function-arguments-" + getClassName(cf["class"]) + "-" + cf.method;
                angular.forEach(args, function(arg) {
                    key += "-" + ("string" == typeof arg ? arg : CryptoJS.MD5(arg.toString()));
                });
                var callback = args[args.length - 1];
                if ("function" == typeof callback) {
                    var storedArguments = self.get(key);
                    if (storedArguments) {
                        var selfFunc = this;
                        _.defer(function() {
                            callback.apply(selfFunc, storedArguments);
                        });
                    }
                    args[args.length - 1] = function() {
                        var args = Array.prototype.slice.call(arguments, 0);
                        self.set(key, args), callback.apply(this, args);
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
    }, this.get = function(name, defaultValue) {
        if ("undefined" == typeof defaultValue && (defaultValue = null), "undefined" == typeof storage[name]) return defaultValue;
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
}), myRetail.factory("_t", function(translator) {
    return translator.translate;
}), myRetail.factory("config", function() {
    var config = {
        serverUrl: "",
        baseUrl: ""
    };
    return config = _.extend(config, configLocal);
}), angular.module("filters", []).filter("timeLeft", function() {
    return function(input) {
        if (!input) return "unknown";
        var time = moment(input).fromNow(!0);
        return time;
    };
}).filter("salePercentage", function() {
    return function(input) {
        return input ? Math.round(100 * (1 - input)) + "%" : "-";
    };
}).filter("price", function() {
    return function(input, currency) {
        var curs = {
            czk: "Kč",
            eur: "€"
        };
        return (Math.round(100 * input) / 100 + "").replace(".", ",") + " " + (curs[currency] || "-");
    };
}).filter("formatDate", function() {
    return function(input, format) {
        return moment(input).format(format);
    };
}).filter("_", function() {
    return function(text) {
        return text;
    };
});