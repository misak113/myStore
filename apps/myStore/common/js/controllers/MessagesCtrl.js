

function MessagesCtrl($scope, notificationModel, $timeout, $controller) {
	var self = this;
	$scope.messages = [];
	$scope.notReadMessages = [];
	
	notificationModel.getNotifications(function (notifications) {
		$scope.messages = notifications;
		$scope.$apply();
	});
	notificationModel.bindNotRead(function (notifications) {
		$scope.notReadMessages = notifications;
		$scope.$apply();
	});
	$scope.$on('$viewContentLoaded', function() {
	    $timeout(function () {
			if ($scope.notReadMessages.length === 0)
				return;
			notificationModel.setAsRead($scope.notReadMessages);
		}, 4000);
	});

	$scope.callButton = function (message) {
		var $ctrlScope = $scope;
		var ctrl = $controller(message.settings.ctrl, { $scope: $ctrlScope });
		$ctrlScope[message.settings.fn].apply(self, message.settings.args);
	};
};