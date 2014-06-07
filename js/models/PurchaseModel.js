/**
 * 
 */

var PurchaseModel = function (socket, cache) {
	this.className = 'PurchaseModel';
	
	this.getPurchases = function (cb) {
		socket.on('/purchases', function (data) {
			cb(data);
		});

		var cached = cache.get('getPurchases-called');
		if (cached) return;
        cache.set('getPurchases-called', true);
		socket.emit('/purchases');
	};
	
	this.getPurchase = function (id, cb) {
		this.getPurchases(function (purchases) {
			var returnPurchase = null;
			angular.forEach(purchases, function (purchase) {
				if (purchase._id == id) {
					returnPurchase = purchase;
				}
			});
			if (returnPurchase !== null) {
				cb(returnPurchase);
			}
		});
	};
	
	this.getPurchaseItem = function (id, cb) {
		this.getPurchase(1864686, function (purchase) {
			cb(purchase.items[0]); // @todo
		});
	};
};

myRetail.factory('purchaseModel', function (socket, memoryCache) {
	var purchaseModel = new PurchaseModel(socket, memoryCache);
	return purchaseModel;
});