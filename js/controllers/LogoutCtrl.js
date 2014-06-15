
function LogoutCtrl ($scope, authDisp, $location) {
	
	authDisp.setVerificationHash(null);
	$location.path('/login');
};