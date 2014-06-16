
var AuthDisp = function ($route, $timeout, userModel, $location, messageDisp, socket, offlineStorage) {
	var self = this;

	this.getVerificationHash = function () {
		return offlineStorage.get('verificationHash');
	};

	this.setVerificationHash = function (verificationHash) {
		offlineStorage.set('verificationHash', verificationHash);
		connect();
	};

	socket.on('connection', function (data) {
		connect();
	});

	var connect = function () {
		l.log('connect');
		var verificationHash = self.getVerificationHash();
		socket.emit('verificationHash', verificationHash, function (e) {
			if (e) {
				offlineStorage.set('verificationHash', null);
			}
		});
	};

	var loginCtrls = ['LoginCtrl'];
	var allowedCtrls = ['LoginCtrl', 'MenuCtrl', 'MessagesCtrl', 'RegisterCtrl'];
	
	// funkce, která checkuje, zda je přihlášen
	this.checkAuth = function (next) {
		var loggedIn = !!self.getVerificationHash();
		if (loggedIn === false) {
			var currentCtrl = typeof $route.current !== 'undefined' && 
				typeof $route.current.$$route !== 'undefined' ?$route.current.$$route.controller ?$route.current.$$route.controller.name :null :null;
			
			if (!_.contains(allowedCtrls, currentCtrl)) {
				messageDisp.flash('Byl jste automaticky odhlášen. Přihlaste se znovu.', 'warning');
				$location.path('/login');
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
	this.control = function (next, current) {
 		var nextCtrl = typeof next !== 'undefined' 
			&& typeof next.$$route !== 'undefined' ?next.$$route.controller ?next.$$route.controller.name :null :null;
		var currentCtrl = typeof current !== 'undefined' 
			&& typeof current.$$route !== 'undefined' ?current.$$route.controller ?current.$$route.controller.name :null :null;
		
		var loggedIn = !!self.getVerificationHash();
		if (loggedIn !== false) {
			if (_.contains(loginCtrls, nextCtrl)) {
				$location.path('/home');
			}
		} else {
			if (_.contains(allowedCtrls, nextCtrl)) return;

			// pokud jde na naoprávněnou stránku, přejde fallback na login
			$location.path('/login');
			if (_.contains(allowedCtrls, currentCtrl)) {
				messageDisp.flash('Není možné používat aplikaci, pokud nejste přihlášen.', 'warning');
			} else if (!_.contains(allowedCtrls, nextCtrl)) {
				messageDisp.flash('Byl jste automaticky odhlášen. Přihlaste se znovu.', 'warning');
			}
		}
	};
};

myRetail.factory('authDisp', function ($route, $timeout, userModel, $location, messageDisp, socket, offlineStorage) {
	var instance = new AuthDisp($route, $timeout, userModel, $location, messageDisp, socket, offlineStorage);
	return instance;
});