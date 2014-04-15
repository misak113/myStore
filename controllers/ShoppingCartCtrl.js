
var l = require('log-dispatch');
var _ = require('underscore');
var moment = require('moment');

var ShoppingCart = require('../models/ShoppingCart');
var Product = require('../models/Product');

module.exports = exports = function (socket) {
	return new ShoppingCartCtrl(socket);
};

var gets = {};

var ShoppingCartCtrl = function (socket) {
	// no use this for context, use self OR this.self
	var self = socket.self = this;

	// store for notify
	var put = function (putFn) {
		return function () {
			putFn.apply(this, arguments);
			_.keys(gets).forEach(function (key) {
				var get = gets[key];
				l.d('call get by put', get.self._id);
				get.fn.apply(get.self, get.args);
			});
		};
	};
	var get = function (getFn) {
		return function () {
			gets[this._id] = ({fn: getFn, args: arguments, self: this});
			getFn.apply(this, arguments);
		};
	};

	// GET
	// notifier.get(socket).on('/shoppingCarts', self.shoppingCarts);
	socket.on('/shopping-carts', get(self.shoppingCarts));
	socket.on('/shopping-cart', get(self.shoppingCart));

	// PUT
	// notifier.put(socket).tags(['/shopping-carts', '/shopping-cart']).on('/shoppingCarts', self.shoppingCarts);
	socket.on('/save-shopping-cart', put(self.saveShoppingCart));
	socket.on('/remove-shopping-cart', put(self.removeShoppingCart));
	socket.on('/unremove-shopping-cart', put(self.unremoveShoppingCart));
	socket.on('/add-shopping-cart-item-by-product-id', put(self.addShoppingCartItemByProductId));
	socket.on('/add-shopping-cart-complement', put(self.addShoppingCartComplement));
};

ShoppingCartCtrl.prototype.shoppingCarts = function (data, cb) {
	var self = this;
	l.d('returned shoppingCarts');
	ShoppingCart.getShoppingCarts(function (e, shoppingCarts) {
		if (e) return cb({ status: 'error', error: e.message });

		self.emit('/shopping-carts', shoppingCarts);
	});
};
ShoppingCartCtrl.prototype.shoppingCart = function (data, cb) {
	var self = this;
	l.d('returned shoppingCart');
	var callback = function (e, shoppingCart) {
		if (e) {
			cb({ status: 'error', error: e.message });
			return;
		}

		self.emit('/shopping-cart', shoppingCart);
	};
	switch (true) {
		case typeof data.shoppingCartId !== 'undefined':
			ShoppingCart.getShoppingCart(data.shoppingCartId, callback);
			break;
		case typeof data.customerId !== 'undefined':
			ShoppingCart.getLastByCustomerId(data.customerId, callback);
			break;
	}
};

ShoppingCartCtrl.prototype.saveShoppingCart = function (shoppingCart, cb) {
	l.d('save shoppingCart ');
	ShoppingCart.save(shoppingCart, function (e, shoppingCart) {
		if (e) {
			cb({ status: 'error', error: e.message });
			return;
		}

		cb({ status: 'ok', shoppingCart: shoppingCart });
	});
};

ShoppingCartCtrl.prototype.addShoppingCartItemByProductId = function (data, cb) {
	var shoppingCart = data.shoppingCart;
	var productId = data.productId;
	l.d('add shoppingCart.Item '+shoppingCart._id+' by productId '+productId);
	Product.getProduct(productId, function (e, product) {
		if (e) {
			cb({ status: 'error', error: e.message });
			return;
		}

		addItemByProduct(shoppingCart, product);
		ShoppingCart.save(shoppingCart, function (e, shoppingCart) {
			if (e) {
				cb({ status: 'error', error: e.message });
				return;
			}

			cb({ status: 'ok', shoppingCart: shoppingCart });
		});
	});
};

ShoppingCartCtrl.prototype.addShoppingCartComplement = function (data, cb) {
	var shoppingCart = data.shoppingCart;
	l.d('add complement '+shoppingCart._id);
	Product.getProducts(function (e, products) {
		if (e) {
			cb({ status: 'error', error: e.message });
			return;
		}

		products.forEach(function (product) {
			// @TODO do not add all products, but add by association rules
			addItemByProduct(shoppingCart, product);
		});
		ShoppingCart.save(shoppingCart, function (e, shoppingCart) {
			if (e) {
				cb({ status: 'error', error: e.message });
				return;
			}

			cb({ status: 'ok', shoppingCart: shoppingCart });
		});
	});
};

var addItemByProduct = function (shoppingCart, product) {
	var existingItem = _.find(shoppingCart.items, function (item) {
		return item.product.id == product.id;
	});
	if (existingItem) {
		existingItem.qty++;
		existingItem.active = true;
		existingItem.product = product;
	} else {
		var item = {
			name: product.name,
			date: moment().toDate(),
			checked: false,
			check_date: null,
			qty: 1,
			active: true,
			askingPrice: product.price,
			product: product
		};
		shoppingCart.items.push(item);
	}
};

ShoppingCartCtrl.prototype.removeShoppingCart = function (shoppingCartId, cb) {
	l.d('remove shoppingCart ', shoppingCartId);
	ShoppingCart.remove(shoppingCartId, function (e) {
		if (e) {
			cb({ status: 'error', error: e.message });
			return;
		}

		cb({ status: 'ok' });
	});
};

ShoppingCartCtrl.prototype.unremoveShoppingCart = function (shoppingCartId, cb) {
	l.d('unremove shoppingCart ', shoppingCartId);
	ShoppingCart.unremove(shoppingCartId, function (e) {
		if (e) {
			cb({ status: 'error', error: e.message });
			return;
		}

		cb({ status: 'ok' });
	});
};
