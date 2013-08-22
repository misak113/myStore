
// tento controller je spuštěn vždy, proto je využíván jako spouštěč všech must-run služeb
function AppCtrl($scope, pullDown, $timeout
	, userModel, $location, messageDisp
	, $route, loadingDisp, offlineStorage) {
	var loginCtrls = ['LoginCtrl'];
	var allowedCtrls = ['LoginCtrl', 'MenuCtrl', 'MessagesCtrl'];

	// store defined methods to local storage
	offlineStorage.storeFunctions();

	// funkce, která checkuje, zda je přihlášen
	var checkAuth = function (next) {
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

	// každou vteřinu kontroluje, zda je přihlášen. Pokud ne, vrátí na logovací stránku
	var interval;
	interval = function (fn, time) {
		$timeout(function () {
			fn(function () { 
				interval(fn, time); 
			});
		}, time);
	};
	interval(checkAuth, 2000);

	// při načtení jiné stránky @todo moc se mi to takhle nelíbí
	$scope.$on('$routeChangeSuccess', function(ngEv, current, previous) { 
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
 	});


	// reload @todo (aby to vypadalo že načítá, tak vteřina)
	loadingDisp.onReload(function () {
		// if done, hide pullDown
		$timeout(function () { 
			$route.reload();
			loadingDisp.loading(false); 
		}, 1000);
	});

	// main templates
	$scope.navTemplate = 'templates/nav.html';
	$scope.pulldownTemplate = 'templates/pulldown.html';
};
