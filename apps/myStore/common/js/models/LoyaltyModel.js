/**
 * 
 */

var LoyaltyModel = function (socket) {
	this.className = 'LoyaltyModel';
	
	this.getPoints = function (callback) {
		callback(87);
	};
};

myRetail.factory('loyaltyModel', function (socket) {
	var loyaltyModel = new LoyaltyModel(socket);
	return loyaltyModel;
});