/**
 *
 * @param $scope
 * @param {CustomerModel} customerModel
 * @constructor
 */
function BargainingCtrl($scope, customerModel) {

	$scope.customerId = '';
	$scope.customer = null;

	$scope.findCustomer = function () {
		customerModel.getCustomer($scope.customerId, function (customer) {
			$scope.customer = customer;
		});
	};

	$scope.getClassByMembershipLevel = function () {
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
}