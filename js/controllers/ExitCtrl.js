

function ExitCtrl($scope, native) {
	if (!native.ready())
		return;

	// @todo this is depricated
	native.WL.App.close();

}