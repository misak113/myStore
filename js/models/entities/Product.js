
function Product (data) {
	var self = this;
	self.defaultData = {
		_id: null,
		id: null,
		name: '',
		price: 0,
		acquisitionPrice: 0,
		priceChange: 0
	};
	data = _.extend(self.defaultData, data);
	_.extend(self, data);
}

Product.prototype.getAcquisitionPrice = function (membershipLevelId) {
	var multiplier = membershipLevelId - 1;
	return this.acquisitionPrice + multiplier * this.priceChange;
};