

function PurchaseListCtrl($scope, purchaseModel, shoppingCartModel) {
	
	purchaseModel.getPurchases(function (purchases) {
		$scope.purchases = purchases;
	});

	$scope.shoppingCartListTemplate = 'templates/shoppingCartList.html';
};