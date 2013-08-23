
var AuthDisp = function ($route, $timeout, userModel, $location, messageDisp) {
	var self = this;

	var loginCtrls = ['LoginCtrl'];
	var allowedCtrls = ['LoginCtrl', 'MenuCtrl', 'MessagesCtrl'];
	
	// funkce, která checkuje, zda je přihlášen
	this.checkAuth = function (next) {
		var loggedIn = userModel.isLoggedIn();
		if (loggedIn === false) {
			var currentCtrl = typeof $route.current !== 'undefined' && 
				typeof $route.current.$$route !== 'undefined' ?$route.current.$$route.controller ?$route.current.$$route.controller.name :null :null;
			
			if (!_.contains(allowedCtrls, currentCtrl)) {
				$location.path('/login');
				messageDisp.flash('Byl jste automaticky odhlášen. Přihlaste se znovu.', 'warning');
				$scope.$apply();
			}
		}
		if (typeof next === 'function')
			next(loggedIn);		
	};
	
	this.startControl = function () {
		interval(self.checkAuth, 2000);
	};

	// každou vteřinu kontroluje, zda je přihlášen. Pokud ne, vrátí na logovací stránku
	var interval = function (fn, time) {
		$timeout(function () {
			fn(function () { 
				interval(fn, time); 
			});
		}, time);
	};



	// zkontroluje, zda je přihlášen, pokud ne přesměruje
	this.control = function (current, previous) {
 		var previousCtrl = typeof previous !== 'undefined' 
			&& typeof previous.$$route !== 'undefined' ?previous.$$route.controller ?previous.$$route.controller.name :null :null;
		var currentCtrl = typeof current !== 'undefined' 
			&& typeof current.$$route !== 'undefined' ?current.$$route.controller ?current.$$route.controller.name :null :null;
		
		var loggedIn = userModel.isLoggedIn();
		if (loggedIn !== false) {
			if (_.contains(loginCtrls, currentCtrl)) {
				$location.path('/home');
			}
		} else {
			if (_.contains(allowedCtrls, currentCtrl)) return;

			$location.path('/login');
			if (_.contains(allowedCtrls, previousCtrl)) {
				messageDisp.flash('Není možné používat aplikaci, pokud nejste přihlášen.', 'warning');
			} else if (!_.contains(allowedCtrls, currentCtrl)) {
				messageDisp.flash('Byl jste automaticky odhlášen. Přihlaste se znovu.', 'warning');
			}
		}
	};
};

myRetail.factory('authDisp', function ($route, $timeout, userModel, $location, messageDisp) {
	var instance = new AuthDisp($route, $timeout, userModel, $location, messageDisp);
	return instance;
});