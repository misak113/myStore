
var l = require('log-dispatch');
var _ = require('underscore');

var ShoppingCart = require('../models/ShoppingCart');

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
	ShoppingCart.getShoppingCart(data.shoppingCartId, function (e, shoppingCart) {
		if (e) return cb({ status: 'error', error: e.message });

		self.emit('/shopping-cart', shoppingCart);
	});
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
