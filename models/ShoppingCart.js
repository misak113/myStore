
var mongoose = require('mongoose');
var l = require('log-dispatch');

var schema = mongoose.Schema({
	name: String, 
	date: Date,
	totalPrice: Number,
	originalPrice: Number,
	currency: String,
	items: [{
		_id: mongoose.Schema.Types.ObjectId,
		name: String,
		date: Date,
		checked: Boolean,
		check_date: Date,
		qty: Number,
		active: Boolean
	}],
	active: Boolean
});

var ShoppingCart = mongoose.model('ShoppingCart', schema);


ShoppingCart.getShoppingCarts = function (cb) {
	ShoppingCart.find({active: true})
	.sort('-date')
	.limit(15)
	.exec(function (e, shoppingCarts) {
		if (e) return cb(e);

		var shoppingCartsData = [];
		shoppingCarts.forEach(function (shoppingCart) {
			var shoppingCartData = shoppingCart.toObject();
			shoppingCartsData.push(shoppingCartData);
		});
		cb(null, shoppingCartsData);
	});
};

ShoppingCart.getShoppingCart = function (id, cb) {
	ShoppingCart.findOne({_id: id, active: true}, function (e, shoppingCart) {
		if (e) return cb(e);

		var shoppingCartData = shoppingCart.toObject();
		cb(null, shoppingCartData);
	});
};

ShoppingCart.save = function (shoppingCartData, cb) {
	// adding _id to items
	shoppingCartData.items.forEach(function (item) {
		if (item._id === null)
			item._id = new mongoose.Types.ObjectId();
	});
	// create or update
	if (shoppingCartData._id === null) {
		// add _id to cart
		shoppingCartData._id = new mongoose.Types.ObjectId();
		// default is active
		shoppingCartData.active = true;
		ShoppingCart.create(shoppingCartData, function (e, shoppingCart) {
			if (e) return cb(e);

			cb(null, shoppingCart.toObject());
		});
	} else {
		// store and clear _id
		var id = shoppingCartData._id;
		delete shoppingCartData._id;
		ShoppingCart.update({_id: id}, shoppingCartData, function (e) {
			if (e) return cb(e);

			shoppingCartData._id = id;
			cb(null, shoppingCartData);
		});
	}
};

ShoppingCart.remove = function (id, cb) {
	ShoppingCart.update({_id: id}, { active: false }, function (e) {
		if (e) return cb(e);
		
		cb(null);
	});
};
ShoppingCart.unremove = function (id, cb) {
	ShoppingCart.update({_id: id}, { active: true }, function (e) {
		if (e) return cb(e);
		
		cb(null);
	});
};


exports = module.exports = ShoppingCart;
