
var mongoose = require('mongoose');
var l = require('log-dispatch');

var schema = mongoose.Schema({
	name: String, 
	price: Number,
	comments: [{ text: String, author: String }]
});

var Offer = mongoose.model('Offer', schema);

Offer.getOffers = function (cb) {
	Offer.find({}, function (e, offers) {
		if (e) return cb(e);

		var offersObj = [];
		// mark offers viewed by user
		offers.forEach(function (offer) {
			var offerObj = offer.toObject();
			offerObj.viewed = true;
			offersObj.push(offerObj);
		});
		cb(e, offersObj);
	});
};

Offer.getOffer = function (id, cb) {
	Offer.findOne({ _id: id }, function (e, offer) {
		if (e) return cb(e);

		cb(null, offer.toObject());
	});
};

Offer.addComment = function (id, comment, cb) {
	Offer.findOne({ _id: id }, function (e, offer) {
		offer.comments.push(comment);
		offer.save(function () {
			if (e) return cb(e);
			cb(null, comment);
		});
	});
};


module.exports = Offer;
