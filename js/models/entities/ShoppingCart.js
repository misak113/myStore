

function ShoppingCart(data) {
	if (!data) {
		data = {};
	}
	var self = this;
	self.defaultData = {
		_id: null,
		name: '',
		date: moment().format('YYYY-MM-DD HH:mm:ss'),
		totalPrice: 0,
		originalPrice: 0,
		currency: 'czk',
		items: []
	};
	data = _.extend(self.defaultData, data);
	_.extend(self, data);
	_.forEach(self.items, function (val, key) {
		self.items[key] = new ShoppingCart.Item(val);
	});
};
ShoppingCart.prototype.allChecked = function () {
	return !_.any(this.activeItems(), function (item) {
		return !item.checked;
	});
};
ShoppingCart.prototype.notCheckedItems = function () {
	return _.filter(this.activeItems(), function (item) {
		return !item.checked;
	});
};
ShoppingCart.prototype.activeItems = function () {
	return _.filter(this.items, function (item) {
		return item.active;
	});
};
ShoppingCart.prototype.getTotalPrice = function () {
	return _.reduce(this.activeItems(), function (memo, item) {
		return memo + item.product.price * item.qty;
	}, 0);
};
ShoppingCart.prototype.getTotalAcquisitionPrice = function () {
	return _.reduce(this.activeItems(), function (memo, item) {
		return memo + item.product.acquisitionPrice * item.qty;
	}, 0);
};
ShoppingCart.prototype.getTotalAskingPrice = function () {
	return _.reduce(this.activeItems(), function (memo, item) {
		return memo + item.askingPrice * item.qty;
	}, 0);
};
ShoppingCart.prototype.getTotalQty = function () {
	return _.reduce(this.activeItems(), function (memo, item) {
		return memo + item.qty;
	}, 0);
};
ShoppingCart.prototype.toObject = function () {
	var obj = angular.copy(this);
	// clear other props
	var allowed_keys = _.keys(this.defaultData);
	_.forEach(_.keys(obj), function (key) {
		if (!_.contains(allowed_keys, key))
			delete obj[key];
	});
	// items of cart
	_.forEach(obj.items, function (item, key) {
		obj.items[key] = item.toObject();
	});
	return obj;
};







ShoppingCart.Item = function (data) {
	var self = this;
	self.defaultData = {
		_id: null,
		name: '',
		date: moment().format('YYYY-MM-DD HH:mm:ss'),
		checked: false,
		check_date: null,
		qty: 1,
		active: true,
		askingPrice: 0,
		product: {
			id: null,
			name: '',
			price: 0,
			acquisitionPrice: 0
		}
	};
	data = _.extend(self.defaultData, data);
	_.extend(self, data);
};
ShoppingCart.Item.prototype.toObject = function () {
	var obj = angular.copy(this);
	// clear other props
	var allowed_keys = _.keys(this.defaultData);
	_.forEach(_.keys(obj), function (key) {
		if (!_.contains(allowed_keys, key))
			delete obj[key];
	});
	return obj;
};

myRetail.factory('ShoppingCart', function () {
	return ShoppingCart;
});