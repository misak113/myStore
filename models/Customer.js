
var mongoose = require('mongoose');
var l = require('log-dispatch');
var _ = require('underscore');
var moment = require('moment');

var schema = mongoose.Schema({
	id: Number,
	firstName: String,
	lastName: String,
	customerValue: Number,
	membershipLevel: {
		id: Number,
		name: String,
		customerValue: {
			minimum: Number,
			maximum: Number
		}
	}
});

var Customer = mongoose.model('Customer', schema);
exports = module.exports = Customer;

Customer.getCustomer = function (id, cb) {
	Customer.findOne({ id: id }, function (e, customer) {
		if (e) {
			cb(e);
			return;
		}

		cb(null, customer.toObject());
	});
};