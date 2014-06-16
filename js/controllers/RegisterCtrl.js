
function RegisterCtrl($scope, offlineStorage, userModel, authDisp, messageDisp, $location, deviceRecorder) {

	var userLogin = offlineStorage.get('user-login', {});
	$scope.firstName = null;
	$scope.lastName = null;
	$scope.email = null;
	$scope.username = userLogin.username;
	$scope.password = null;

	$scope.register = function () {
		userModel.register($scope.email, $scope.username, $scope.password, $scope.firstName, $scope.lastName, function (e, user) {
			if (e) {
				messageDisp.flash(e.message, 'success');
				$scope.$apply();
				return;
			}
			userModel.login($scope.username, $scope.password, false, function (e, verificationHash) {
				if (e) {
					if (e.code === userModel.WRONG_CREDENTIALS) {
						return messageDisp.flash('Zadal jste nesprávné jméno nebo heslo. Zkontrolujte a opakujte.', 'error');
					}
					return messageDisp.flash('Při přihlašování nastala chyba, zkuste znovu později.', 'error');
				}
				authDisp.setVerificationHash(verificationHash);
				deviceRecorder.storeDevice(function () {});
				messageDisp.flash('Byl jste úspěšně zaregistrován a přihlášen.', 'success');
				$location.path('/home');
				$scope.$apply();
			});
		});
	};
}
