
var l = require('log-dispatch');
var _ = require('underscore');

var Customer = require('../models/Customer');

module.exports = exports = function (socket) {
	return new CustomerCtrl(socket);
};

var gets = {};

var CustomerCtrl = function (socket) {
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
	socket.on('/customer', get(self.customer));

	// PUT
	// notifier.put(socket).tags(['/shopping-carts', '/shopping-cart']).on('/shoppingCarts', self.shoppingCarts);
	// socket.on('/set-notification-as-read', put(self.setAsRead));
};

CustomerCtrl.prototype.customer = function (data, cb) {
	var self = this;
	l.d('returned customer '+data.customerId);
	Customer.getCustomer(data.customerId, function (e, customer) {
		if (e) {
			cb({ status: 'error', error: e.message });
			return;
		}

		self.emit('/customer', customer);
	});
};