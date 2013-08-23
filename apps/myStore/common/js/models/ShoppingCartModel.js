/**
 * 
 */

var ShoppingCartModel = function (socket, messageDisp, memoryCache) {
	this.className = 'ShoppingCartModel';
	var cache = memoryCache;

	this.getShoppingCart = function (shoppingCartId, cb) {
        socket.on('/shopping-cart', function (data) {
        	cb(data);
        });

		var cached = cache.get('getShoppingCart-called');
		if (cached) return;
        cache.set('getShoppingCart-called', true);
		socket.emit('/shopping-cart', {shoppingCartId: shoppingCartId});
	};
	
	this.getShoppingCarts = function (cb) {
        socket.on('/shopping-carts', function (data) {
        	cb(data);
        });

		var cached = cache.get('getShoppingCarts-called');
		if (cached) return;
        cache.set('getShoppingCarts-called', true);
        socket.emit('/shopping-carts', {});
	};

	this.saveShoppingCart = function (shoppingCart, cb) {
		socket.emit('/save-shopping-cart', shoppingCart, function (data) {
			if (data.status === 'ok')
				return cb(null, data.shoppingCart);
			
			messageDisp.flash('Při ukládání nákupního seznamu nastala chyba.', 'error');
			cb(new Error('Error while editing'));
		});
	};

	this.removeShoppingCart = function (shoppingCart, cb) {
		socket.emit('/remove-shopping-cart', shoppingCart._id, function (data) {
			if (data.status === 'ok')
				return cb(null);
			
			messageDisp.flash('Při mazání nákupního seznamu nastala chyba.', 'error');
			cb(new Error('Error while removing'));
		});
	};
	this.unremoveShoppingCart = function (shoppingCartId, cb) {
		socket.emit('/unremove-shopping-cart', shoppingCartId, function (data) {
			if (data.status === 'ok')
				return cb(null);
			
			messageDisp.flash('Při obnovení nákupního seznamu nastala chyba.', 'error');
			cb(new Error('Error while removing'));
		});
	};
	
};

myRetail.factory('shoppingCartModel', function (socket, messageDisp, memoryCache) {
	var model = new ShoppingCartModel(socket, messageDisp, memoryCache);
	return model;
});