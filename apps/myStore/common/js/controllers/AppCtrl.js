
// tento controller je spuštěn vždy, proto je využíván jako spouštěč všech must-run služeb
function AppCtrl($scope, $timeout, $route, loadingDisp, offlineStorage, authDisp) {

	// store defined methods to local storage
	offlineStorage.storeAll();

	// checking if is already loggedIn
	authDisp.startControl();

	// při načtení jiné stránky
	$scope.$on('$routeChangeSuccess', function(ngEv, current, previous) { 
		authDisp.control(current, previous);
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
