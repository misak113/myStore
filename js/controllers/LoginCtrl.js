

function LoginCtrl ($scope, $location, userModel, loadingDisp, messageDisp, offlineStorage, authDisp, deviceRecorder) {
	$scope.loading = false;

	$scope.login = function () {
		$scope.loading = true;
		loadingDisp.loading(true, function () {
			$scope.loading = false;
			$scope.$apply();
		});

		userModel.login($scope.username, $scope.password, $scope.remember, function (e, verificationHash) {
			// pokud bylo zastaveno uživatelem
			if ($scope.loading === false) return;

			loadingDisp.loading(false);
			$scope.loading = false;
			if (e) {
				if (e.code === userModel.WRONG_CREDENTIALS) {
					return messageDisp.flash('Zadal jste nesprávné jméno nebo heslo. Zkontrolujte a opakujte.', 'error');
				}
				return messageDisp.flash('Při přihlašování nastala chyba, zkuste znovu později.', 'error');
			}

			authDisp.setVerificationHash(verificationHash);
			deviceRecorder.storeDevice(function () {});
			messageDisp.flash('Byl jste úspěšně přihlášen.', 'success');
			$location.path('/home');
			$scope.$apply();
		});
	}

	var userLogin = offlineStorage.get('user-login', {});
	$scope.username = userLogin.username ?userLogin.username :'';
	$scope.remember = userLogin.remember ?true :false;
	var changeUserLogin = function () {
		var userLogin = offlineStorage.get('user-login', {});
		userLogin.username = $scope.username;
		userLogin.password = $scope.password;
		userLogin.remember = $scope.remember;
		offlineStorage.set('user-login', userLogin);
	};
	$scope.$watch('username', changeUserLogin, true);
	$scope.$watch('password', changeUserLogin, true);
	$scope.$watch('remember', changeUserLogin, true);
};