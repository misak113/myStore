
var CustomerModel = function (socket, memoryCache) {
	this.className = 'CustomerModel';
	this.socket = socket;
	this.cache = memoryCache;
};

CustomerModel.prototype.getCustomer = function (id, cb) {
	this.socket.on('/customer', function (data) {
		cb(data);
	});

	var cached = this.cache.get('getCustomer-called-'+id);
	if (cached) return;
	this.cache.set('getCustomer-called-'+id, true);
	this.socket.emit('/customer', { customerId: id });
};

myRetail.factory('customerModel', function (socket, memoryCache) {
	return new CustomerModel(socket, memoryCache);
});