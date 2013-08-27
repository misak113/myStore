

function EditShoppingCartCtrl($scope, $routeParams, shoppingCartModel, ShoppingCart) {

	$scope.newItem = new ShoppingCart.Item({});

	$scope.newItemId = null;
	$scope.shoppingCart = new ShoppingCart({});

	if (typeof $routeParams.shoppingCartId !== 'undefined') {
		shoppingCartModel.getShoppingCart($routeParams.shoppingCartId, function (shoppingCart) {
			$scope.shoppingCart = new ShoppingCart(shoppingCart);
			$scope.$apply();
		});
	}

	$scope.addItem = function () {
		$scope.shoppingCart.items.unshift($scope.newItem);

		$scope.newItem = new ShoppingCart.Item({});
		$scope.save();
	};
	$scope.removeItem = function (itemToRemove) {
		itemToRemove.active = false;
		$scope.save();
	};
	$scope.unremoveItem = function (itemToUnremove) {
		itemToUnremove.active = true;
		$scope.save();
	};

	$scope.countAdd = function (item) {
		item.qty++;
		$scope.save();
	};
	$scope.countSub = function (item) {
		item.qty--;
		$scope.save();
	};

	$scope.save = function () {
		shoppingCartModel.saveShoppingCart($scope.shoppingCart.toObject(), function (e, shoppingCart) {
			if (e)
				return;
			
			$scope.shoppingCart = new ShoppingCart(shoppingCart);
			$scope.$apply();
		});
	};

}

