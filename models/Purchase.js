
var mongoose = require('mongoose');


var purchaseSchema = mongoose.Schema({
	id: Number, 
	name: String, 
	price: Number,
	date: Date,
	items: [{ name: String, price: Number, qty: Number }]
});

var Purchase = mongoose.model('Purchase', purchaseSchema);

Purchase.getPurchases = function (cb) {
	Purchase.find({}, function (e, purchases) {
		if (e) return cb(e);
		var ar = [];
		purchases.forEach(function (purchase) {
			ar.push(purchase.toObject());
		});
		cb(null, ar);
	});
};

module.exports = Purchase;
