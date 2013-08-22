

function ShoppingCartCtrl($scope, $routeParams, shoppingCartModel, ShoppingCart) {
	
	$scope.shoppingCart = new ShoppingCart({});

	shoppingCartModel.getShoppingCart($routeParams.shoppingCartId, function (shoppingCart) {
		$scope.shoppingCart = new ShoppingCart(shoppingCart);
		$scope.$apply();
	});

	$scope.getItemClass = function (item) {
		return item.checked ?'checked' :'';
	};

	$scope.save = function (item) {
		item.check_date = moment().format('YYYY-MM-DD HH:mm:ss');

		shoppingCartModel.saveShoppingCart($scope.shoppingCart.toObject(), function (e, shoppingCart) {

		});
	};



}