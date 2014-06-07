/*! myStore-client, version: 1.1.4, 2014-06-07 */
function wlCommonInit() {}

var configLocal = {};

if ("undefined" != typeof WLJSX) {
    var wlInitOptions = {
        connectOnStartup: !1,
        logger: {
            enabled: !0,
            level: "debug",
            stringify: !0,
            pretty: !1,
            tag: {
                level: !1,
                pkg: !0
            },
            whitelist: [],
            blacklist: [],
            nativeOptions: {
                capture: !1
            }
        },
        analytics: {
            enabled: !1
        },
        onConnectionFailure: function() {
            alert("Připojení k serveru se nezdařilo.");
        }
    };
    window.addEventListener ? window.addEventListener("load", function() {
        WL.Client.init(wlInitOptions);
    }, !1) : window.attachEvent && window.attachEvent("onload", function() {
        WL.Client.init(wlInitOptions);
    }), configLocal.serverUrl = "http://localhost:80";
}

-1 !== window.location.href.indexOf("chrome-extension") && (configLocal.serverUrl = "http://localhost:80", 
jQuery("html").width("400px").height("800px")), Messages = {}, configLocal.serverUrl = "http://10.0.0.3:3000";

var myRetail = angular.module("myRetail", [ "filters" ], function($routeProvider) {
    $routeProvider.when("/login", {
        templateUrl: "templates/login.html",
        controller: LoginCtrl
    }).when("/home", {
        templateUrl: "templates/home.html",
        controller: HomeCtrl
    }).when("/menu", {
        templateUrl: "templates/menu.html",
        controller: MenuCtrl
    }).when("/messages", {
        templateUrl: "templates/messages.html",
        controller: MessagesCtrl
    }).when("/offer-list", {
        templateUrl: "templates/offerList.html",
        controller: OfferListCtrl
    }).when("/offer/:offerId", {
        templateUrl: "templates/offer.html",
        controller: OfferCtrl
    }).when("/purchase-list", {
        templateUrl: "templates/purchaseList.html",
        controller: PurchaseListCtrl
    }).when("/purchase/:purchaseId", {
        templateUrl: "templates/purchase.html",
        controller: PurchaseCtrl
    }).when("/product/:productId", {
        templateUrl: "templates/product.html",
        controller: ProductCtrl
    }).when("/create-shopping-cart", {
        templateUrl: "templates/editShoppingCart.html",
        controller: EditShoppingCartCtrl
    }).when("/edit-shopping-cart/:shoppingCartId", {
        templateUrl: "templates/editShoppingCart.html",
        controller: EditShoppingCartCtrl
    }).when("/shopping-cart/:shoppingCartId", {
        templateUrl: "templates/shoppingCart.html",
        controller: ShoppingCartCtrl
    }).when("/logout", {
        templateUrl: "templates/home.html",
        controller: LogoutCtrl
    }).when("/exit", {
        templateUrl: "templates/menu.html",
        controller: ExitCtrl
    }).when("/bargaining", {
        templateUrl: "templates/bargaining.html",
        controller: BargainingCtrl
    }).when("/group", {
        templateUrl: "templates/group.html",
        controller: GroupCtrl
    }).when("/setting", {
        templateUrl: "templates/setting.html",
        controller: SettingCtrl
    }).otherwise({
        redirectTo: "/login"
    });
});

myRetail.config(function($compileProvider) {
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|chrome-extension):/);
}), myRetail.factory("socket", function(config) {
    var socket = io.connect(config.serverUrl);
    return socket;
}), myRetail.factory("pullDown", function() {
    return {};
});

var l = {
    log: function(data) {
        console.log(data);
    }
};