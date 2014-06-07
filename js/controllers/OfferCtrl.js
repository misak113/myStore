


function OfferCtrl ($scope, $routeParams, offerModel, $window) {
	$scope.message = '';
	
	var id = $routeParams.offerId;
	
	offerModel.getOffer(id, function (offer) {
		$scope.offer = offer;
		$scope.$apply();
	});
	
	$scope.goBack = function() {
		$window.history.back(); // @todo předělat na angular $location
	};

	$scope.addComment = function () {
		offerModel.addComment(id, $scope.message, function (comment) {
			$scope.message = '';
			$scope.offer.comments.unshift(comment);
			$scope.apply();
		});
	};
};