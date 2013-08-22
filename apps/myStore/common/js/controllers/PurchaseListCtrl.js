

function PurchaseListCtrl($scope, purchaseModel, shoppingCartModel) {
	
	purchaseModel.getPurchases(function (purchases) {
		$scope.purchases = purchases;
	});
};