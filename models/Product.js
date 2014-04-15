
var mongoose = require('mongoose');
var l = require('log-dispatch');
var _ = require('underscore');
var moment = require('moment');

var schema = mongoose.Schema({
	id: Number,
	name: String,
	price: Number,
	acquisitionPrice: Number
});

var Product = mongoose.model('Product', schema);
exports = module.exports = Product;

Product.getProduct = function (id, cb) {
	Product.findOne({ id: id }, function (e, product) {
		if (e) {
			cb(e);
			return;
		}

		cb(null, product.toObject());
	});
};

Product.getProducts = function (cb) {
	Product.find()
		.exec(function (e, products) {
			if (e) return cb(e);

			var dataList = [];
			products.forEach(function (product) {
				var data = product.toObject();
				dataList.push(data);
			});
			cb(null, dataList);
		});
};