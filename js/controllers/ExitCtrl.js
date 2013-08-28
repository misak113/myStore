

function ExitCtrl($scope, native, offlineStorage) {
	if (!native.ready())
		return;

	offlineStorage.set('app-lastVisitedPageRoute', null);
	
	// @todo this is depricated
	native.WL.App.close();

}