
var OfflineStorage = function (shoppingCartModel, notificationModel, offerModel, purchaseModel) {
	var self = this;

	var storedFunctions = [
		{'class': shoppingCartModel, method: 'getShoppingCart'},
		{'class': shoppingCartModel, method: 'getShoppingCarts'},
		{'class': notificationModel, method: 'getNotifications'},
		{'class': offerModel, method: 'getOffers'},
		{'class': offerModel, method: 'getOffer'},
		{'class': purchaseModel, method: 'getPurchases'},
		{'class': purchaseModel, method: 'getPurchase'}
	];

	var getClassName = function (obj) {
		if (obj.className)
			return obj.className;

		if (typeof obj === 'object' 
			&& typeof obj.__proto__ === 'object'
			&& typeof obj.__proto__.constructor === 'function') {
			try {
				var className = /\W*function\s+([\w\$]+)\(/.exec( 
					obj.__proto__.constructor.toString() )[ 1 ];
				if (className !== 'Object')
					return className;
			} catch (e) {}
			try {
				return CryptoJS.MD5(obj.__proto__.constructor.toString());
			} catch (e) {}
		}
		try {
			return CryptoJS.MD5(obj.toString());
		} catch (e) {
			return null;
		}
	};

	this.storeAll = function () {
		_.forEach(storedFunctions, function (cf) {
			var fn = cf['class'][cf.method];
			cf['class'][cf.method] = function () {
				var args = Array.prototype.slice.call(arguments, 0);
				var key = 'store-function-arguments-'
					// @todo class by name
					+getClassName(cf['class'])+'-'+cf.method;
				angular.forEach(args, function (arg) {
					key+= '-'+ (typeof arg === 'string' 
						?arg :CryptoJS.MD5(arg.toString()));
				});

				var callback = args[args.length-1];
				if (typeof callback === 'function') {
					var storedArguments = self.get(key);
					if (storedArguments) {
						var selfFunc = this;
						_.defer(function(){callback.apply(selfFunc, storedArguments);});
					}
					args[args.length-1] = function () {
						var args = Array.prototype.slice.call(arguments, 0);
						self.set(key, args);
						callback.apply(this, args);
					};
				}
				fn.apply(this, args);
			};
		});
	};

	
	var storage = window.localStorage;

	this.set = function (name, value) {
		storage[name] = angular.toJson({
			value: value
		});
	};

	this.get = function (name, defaultValue) {
		if (typeof defaultValue === 'undefined')
			defaultValue = null;

		if (typeof storage[name] === 'undefined')
			return defaultValue;
		try {
			var values = angular.fromJson(storage[name]);
			return values.value;
		} catch (e) {
			return defaultValue;
		}
	};

};


myRetail.factory('offlineStorage', function (shoppingCartModel, notificationModel, offerModel, purchaseModel) {
	var instance = new OfflineStorage(shoppingCartModel, notificationModel, offerModel, purchaseModel);
	return instance;
});
