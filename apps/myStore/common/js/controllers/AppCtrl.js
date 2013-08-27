
// tento controller je spuštěn vždy, proto je využíván jako spouštěč všech must-run služeb
function AppCtrl($scope, $timeout, $route, loadingDisp, offlineStorage, authDisp, $location) {

	// store defined methods to local storage
	offlineStorage.storeAll();

	// checking if is already loggedIn
	authDisp.startControl();

	// při načtení jiné stránky
	$scope.$on('$routeChangeStart', function(ngEv, next, current) { 
		authDisp.control(next, current);
 	});

	// uložení poslední navštívené stránky
	$scope.$on('$routeChangeSuccess', function(ngEv, current, previous) {
		offlineStorage.set('app-lastVisitedPageRoute', $location.$$path);
 	});
 	
	$scope.init = function () {
		// po zapnutí přesměruje tam, kde naposled byl
		var url = offlineStorage.get('app-lastVisitedPageRoute');
		if (url)
			$location.path(url);
	};

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
