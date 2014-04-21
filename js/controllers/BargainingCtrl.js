/**
 *
 * @param $scope
 * @param {CustomerModel} customerModel
 * @param {LoadingDisp} loadingDisp
 * @param {MessageDisp} messageDisp
 * @param {ShoppingCartModel} shoppingCartModel
 * @param {ShoppingCart} ShoppingCart
 * @constructor
 */
function BargainingCtrl($scope, customerModel, loadingDisp, messageDisp, shoppingCartModel, ShoppingCart) {

	$scope.customerId = '';
	$scope.customer = null;
	$scope.shoppingCart = null;

	$scope.findCustomer = function () {
		$scope.customer = null;
		$scope.shoppingCart = null;
		loadingDisp.loading(true, function () {});
		customerModel.getCustomer($scope.customerId, function (customer) {
			if ($scope.customer) {
				return;
			}
			$scope.customer = customer;
			shoppingCartModel.getByCustomerId(customer.id, function (shoppingCart) {
				if ($scope.shoppingCart) {
					return;
				}
				loadingDisp.loading(false);
				$scope.shoppingCart = new ShoppingCart(shoppingCart);
				$scope.shoppingCart = $scope.customer.id;
				$scope.$apply();
			});
		});
	};

	$scope.removeItem = function (itemToRemove) {
		itemToRemove.active = false;
		$scope.save();
	};

	$scope.save = function () {
		shoppingCartModel.saveShoppingCart($scope.shoppingCart.toObject(), function (e, shoppingCart) {});
	};

	$scope.addProduct = function () {
		loadingDisp.loading(true, function () {});
		shoppingCartModel.addByProductId($scope.shoppingCart.toObject(), $scope.productId, function (e, shoppingCart) {
			if (e) {
				return;
			}
			loadingDisp.loading(false);
			$scope.productId = null;
			$scope.shoppingCart = new ShoppingCart(shoppingCart);
			$scope.$apply();
		});
	};

	$scope.approve = function () {
		messageDisp.flash('Smlouvání pro zákazníka bylo schváleno');
	};

	$scope.addComplement = function () {
		loadingDisp.loading(true, function () {});
		shoppingCartModel.addComplement($scope.shoppingCart.toObject(), function (e, shoppingCart) {
			if (e) {
				return;
			}
			loadingDisp.loading(false);
			$scope.shoppingCart = new ShoppingCart(shoppingCart);
			$scope.$apply();
		});
	};

	$scope.getTotalEarningPrice = function () {
		return $scope.shoppingCart.getTotalAskingPrice() - $scope.shoppingCart.getTotalAcquisitionPrice();
	};

	$scope.getClassByMembershipLevel = function () {
		if (!$scope.customer) {
			return '';
		}
		switch ($scope.customer.membershipLevel.id) {
			case 6:
				return 'label-important';
			case 5:
				return 'label-warning';
			case 4:
				return '';
			case 3:
				return 'label-inverse';
			case 2:
				return 'label-info';
			case 1:
				return 'label-success';
			default:
				return '';
		}
	};

	$scope.getClassByShoppingCartPrice = function () {
		var totalAsking = $scope.shoppingCart.getTotalAskingPrice();
		var totalAcquisition = $scope.shoppingCart.getTotalAcquisitionPrice();
		if (totalAsking < totalAcquisition) {
			return 'badge-important';
		}
		if (totalAsking > totalAcquisition) {
			return 'badge-success';
		}
		return '';
	};
}