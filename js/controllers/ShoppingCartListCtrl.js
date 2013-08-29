

function ShoppingCartListCtrl($scope, shoppingCartModel, ShoppingCart, messageDisp) {

	$scope.shoppingCarts = [];

	shoppingCartModel.getShoppingCarts(function (shoppingCarts) {
		$scope.shoppingCarts = [];
		_.forEach(shoppingCarts, function (shoppingCart) {
			$scope.shoppingCarts.push(new ShoppingCart(shoppingCart));
		});
		
		$scope.$apply();
	});


	$scope.getClass = function (shoppingCart) {
		return shoppingCart.allChecked() ?'all-checked' :'';
	};

	$scope.removeShoppingCart = function (shoppingCartToRemove) {
		shoppingCartModel.removeShoppingCart(shoppingCartToRemove.toObject()
		, function (e) {
			if (e) return;
			
			messageDisp.undo('Byl odstraněn nákupní seznam "'+shoppingCartToRemove.name+'". Kliknutím na tlačítko vraťte zpět.'
				,'ShoppingCartListCtrl', 'unremoveShoppingCart', [shoppingCartToRemove._id]);
		});
	};

	$scope.unremoveShoppingCart = function (shoppingCartId) {
		shoppingCartModel.unremoveShoppingCart(shoppingCartId, function (e) {
			if (e) return;

			messageDisp.flash('Nákupní seznam byl znovu obnoven.', 'info');
		});
	};

};