
var l = require('log-dispatch');
var _ = require('underscore');

var Offer = require('../models/Offer');

module.exports = exports = function (socket) {
	return new OfferCtrl(socket);
};

var gets = {};

var OfferCtrl = function (socket) {
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
	socket.on('/offers', get(self.offers));
	socket.on('/offer', get(self.offer));

	// PUT
	// notifier.put(socket).tags(['/shopping-carts', '/shopping-cart']).on('/shoppingCarts', self.shoppingCarts);
	//socket.on('/save-shopping-cart', put(self.saveShoppingCart));
};


OfferCtrl.prototype.offers = function (data, cb) {
	var self = this;
	Offer.getOffers(function (e, offers) {
		if (e) return cb({ status: 'error', error: e.message });

		l.d('returned offers from mongoDB');
		self.emit('/offers', offers);
	});
};

OfferCtrl.prototype.offer = function (data, cb) {
	var self = this;
	Offer.getOffer(data.offerId, function (e, offer) {
		if (e) return cb({ status: 'error', error: e.message });

		l.d('returned offer');
		self.emit('/offer', offer);
	});
};
