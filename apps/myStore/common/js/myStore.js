
// use jQuery

/**
 * AngularJS setup
 * 	Routes
 */
var myRetail = angular.module('myRetail', ['filters']
	, function($routeProvider
		//, $locationProvider
		) {
		$routeProvider.
			when('/login', {
				templateUrl: 'templates/login.html', 
				controller: LoginCtrl
			}).
			when('/home', {
				templateUrl: 'templates/home.html',
				controller: HomeCtrl
			}).
			when('/menu', {
				templateUrl: 'templates/menu.html',
				controller: MenuCtrl
			}).
			when('/messages', {
				templateUrl: 'templates/messages.html',
				controller: MessagesCtrl
			}).
			when('/offer-list', {
				templateUrl: 'templates/offerList.html', 
				controller: OfferListCtrl
			}).
			when('/offer/:offerId', {
				templateUrl: 'templates/offer.html', 
				controller: OfferCtrl
			}).
			when('/purchase-list', {
				templateUrl: 'templates/purchaseList.html', 
				controller: PurchaseListCtrl
			}).
			when('/purchase/:purchaseId', {
				templateUrl: 'templates/purchase.html', 
				controller: PurchaseCtrl
			}).
			when('/product/:productId', {
				templateUrl: 'templates/product.html', 
				controller: ProductCtrl
			}).
			when('/create-shopping-cart', {
				templateUrl: 'templates/editShoppingCart.html', 
				controller: EditShoppingCartCtrl
			}).
			when('/edit-shopping-cart/:shoppingCartId', {
				templateUrl: 'templates/editShoppingCart.html', 
				controller: EditShoppingCartCtrl
			}).
			when('/shopping-cart/:shoppingCartId', {
				templateUrl: 'templates/shoppingCart.html', 
				controller: ShoppingCartCtrl
			}).
			when('/logout', {
				templateUrl: 'templates/home.html', 
				controller: LogoutCtrl
			}).
			otherwise({redirectTo: '/login'});
		//$locationProvider.html5Mode(true);
	});


// init socket.io as angular service
myRetail.factory('socket', function (config) {
	var socket = io.connect(config.serverUrl);
	return socket;
});
// pullDown service
myRetail.factory('pullDown', function () {
	return jQuery.pullDown.start({container: jQuery('.ng-view')});
});

// logging + debuging
var l = {
	log: function (data) {
		console.log(data);
	}
};

// Android detection
/*if (confirm("myEvents existuje i jako aplikace pro Android! Přejete si jí stáhnout pro pohodlnější prohlížení akcí?")) {
	window.location = "https://play.google.com/store/apps/details?id=cz.vse.myevents";
}*/

