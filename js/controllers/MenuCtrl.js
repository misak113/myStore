/**
 * 
 */

function MenuCtrl($scope, native) {

	$scope.items = [
		{
			name: 'Můj účet',
			controller: 'AccountCtrl',
			url: '/moje-id',
			icon: 'user'
		},{
			name: 'Nákupy',
			controller: 'PurchaseListCtrl',
			url: '/purchase-list',
			icon: 'shopping-cart'
		},{
			name: 'Skupina',
			controller: 'GroupCtrl',
			url: '/group',
			icon: 'group'
		},{
			name: 'Nastavení',
			controller: 'SettingCtrl',
			url: '/setting',
			icon: 'cogwheel'
		},{
			name: 'Odhlásit',
			controller: 'LogoutCtrl',
			url: '/logout',
			icon: 'delete'
		}
	];

	if (native.ready()) {
		$scope.items.push({
			name: 'Zavřít',
			controller: 'ExitCtrl',
			url: '/exit',
			icon: 'power'
		});
	}
};