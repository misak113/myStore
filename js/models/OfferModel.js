/**
 * 
 */

var OfferModel = function (socket, memoryCache) {
	this.className = 'OfferModel';
	var cache = memoryCache;
	
	this.markAsUnwanted = function (offer) {
		//$http.get('/todo').success(function() {alert('Unwanted');}); // @todo
	};
	
	this.getOffers = function (cb) {
		socket.on('/offers', function (data) {
			cb(data);
		});

		var cached = cache.get('getOffers-called');
		if (cached) return;
        cache.set('getOffers-called', true);
		socket.emit('/offers', {});
	};
	
	this.getOffer = function (id, cb) {
		socket.on('/offer', function (data) {
			cb(data);
		});

		var cached = cache.get('getOffer-called-'+id);
		if (cached) return;
        cache.set('getOffer-called-'+id, true);
		socket.emit('/offer', { offerId: id });
	};
};

myRetail.factory('offerModel', function (socket, memoryCache) {
	var offerModel = new OfferModel(socket, memoryCache);
	return offerModel;
});