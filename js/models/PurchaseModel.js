/**
 * 
 */

var PurchaseModel = function (socket) {
	this.className = 'PurchaseModel';
	
	this.getPurchases = function (cb) {
		socket.on('/purchases', {});

		socket.emit('/purchases', function(data) {
            cb(res);
        });
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

myRetail.factory('purchaseModel', function (socket) {
	var purchaseModel = new PurchaseModel(socket);
	return purchaseModel;
});