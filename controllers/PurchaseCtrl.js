
var l = require('log-dispatch');


var Purchase = require('../models/Purchase');

module.exports = exports = function (socket) {
	return new PurchaseCtrl(socket);
};

var gets = {};

var PurchaseCtrl = function (socket) {
	// no use this for context, use self OR this.self
	var self = socket.self = this;

	// store for notify
	var put = function (putFn) {
		return function () {
			putFn.apply(this, arguments);
			_.keys(gets).forEach(function (key) {
				var get = gets[key];
				l.d('call get by put', get.self._id);
				get.fn.apply(get.self, get.args);
			});
		};
	};
	var get = function (getFn) {
		return function () {
			gets[this._id] = ({fn: getFn, args: arguments, self: this});
			getFn.apply(this, arguments);
		};
	};

	// GET
	// notifier.get(socket).on('/shoppingCarts', self.shoppingCarts);
	socket.on('/purchases', get(self.purchases));
};


PurchaseCtrl.prototype.purchases = function (data, cb) {
	l.d('purchases');
	this.emit('/purchases', purchases);
};


var purchases = [
	{
		_id: 1864686,
		date: "2013-01-02T12:00:00",
		totalPrice: 152.60,
		originalPrice: 195.12,
		currency: 'czk',
		loyaltyPoints: 12,
		paymentType: {
			name: 'visa',
			title: 'Visa card'
		},
		branch: {
			name: 'Interspar Zličín',
			geolocation: {
				lat: 50.0725058,
				lon: 14.5421189
			},
			phones: [
				'+420 234 672 111',
				'+420 234 670 119'
			],
			address: {
				street: 'Nákupní 1/388',
				postcode: '102 00',
				city: 'Praha 10, Praha-Štěrboholy'
			}
		},
		items: [
			{
				_id: 6568646,
				qty: 3,
				price: 22.97,
				currency: 'czk',
				offer: {
					"_id" : 1568,
					"title" : "Lahodná rajčátka",
					"description" : "Nepřehlédněte nabídku čtvrt kila lahodných rajčat první jakosti",
					"price" : 18.54,
					"currency" : "czk",
					"date_start" : "2013-01-02T12:00:00",
					"date_end" : "2013-01-18T18:59:59",
	                "qtyLimit" : 100,
					"product" : {
						"_id" : 146860,
						"name" : "Rajčata",
						"title" : "Rajčata Balení 250g",
						"product_code" : "566489138",
						"short_description" : "",
						"description" : null,
						"quantity" : 250,
						"measure_unit" : "g",
						"price" : 25.8,
						"currency" : "czk",
						"image": {
							"small" : "http://img.weiku.com/IMG/2010/11/26/1/product/36_38_tomato_paste17318_s.jpg",
							"medium" : "http://www.countryliving.com/cm/countryliving/images/spicy-tomato-jam-3761-200.jpg",
							"large" : "http://api.myretail.cz/imagessuper_tomate-250g-14860-1_large.png"
						},
						"images" : [
								{
									"small" : "http://api.myretail.cz/images/tomate-250g-14860-1_small.png",
									"medium" : "http://api.myretail.cz/images/tomate-250g-14860-1_medium.png",
									"large" : "http://api.myretail.cz/images/tomate-250g-14860-1_large.png"
								},
								{
									"small" : "http://api.myretail.cz/images/tomate-250g-14860-2_small.png",
									"medium" : "http://api.myretail.cz/images/tomate-250g-14860-2_medium.png",
									"large" : "http://api.myretail.cz/images/tomate-250g-14860-2_large.png"
								} ]
					},
					"priority" : 0.890415,
					"image": {
						"small" : "http://img.weiku.com/IMG/2010/11/26/1/product/36_38_tomato_paste17318_s.jpg",
						"medium" : "http://www.countryliving.com/cm/countryliving/images/spicy-tomato-jam-3761-200.jpg",
						"large" : "http://api.myretail.cz/imagessuper_tomate-250g-14860-1_large.png"
					},
					"images" : [ {
						"small" : "http://api.myretail.cz/images/super_tomate-250g-14860-1_small.png",
						"medium" : "http://api.myretail.cz/images/super_tomate-250g-14860-1_medium.png",
						"large" : "http://api.myretail.cz/imagessuper_tomate-250g-14860-1_large.png"
					} ]
				},
				"product" : {
    					"_id" : 146861,
    					"name" : "Rajčátka",
    					"title" : "Bílá čokoláda 120g",
    					"product_code" : "566489148",
    					"short_description" : "",
    					"description" : null,
    					"quantity" : 120,
    					"measure_unit" : "g",
    					"price" : 165.9,
    					"currency" : "czk",
    					"image": {
							"small" : "http://img.weiku.com/IMG/2010/11/26/1/product/36_38_tomato_paste17318_s.jpg",
							"medium" : "http://www.countryliving.com/cm/countryliving/images/spicy-tomato-jam-3761-200.jpg",
							"large" : "http://api.myretail.cz/imagessuper_tomate-250g-14860-1_large.png"
						},
						"images" : [ {
    						"small" : "http://api.myretail.cz/images/chocolate-14861-1_small.png",
    						"medium" : "http://api.myretail.cz/images/chocolate-14861-1_medium.png",
    						"large" : "http://api.myretail.cz/images/chocolate-14861-1_large.png"
    					} ]
    				}
			},
			{
				_id: 87987426,
				qty: 3,
				price: 12.97,
				currency: 'czk',
				offer: null,
				"product" : {
    					"_id" : 146861,
    					"name" : "Čokoláda",
    					"title" : "Bílá čokoláda 120g",
    					"product_code" : "566489148",
    					"short_description" : "",
    					"description" : null,
    					"quantity" : 120,
    					"measure_unit" : "g",
    					"price" : 165.9,
    					"currency" : "czk",
    					"image": {
							"small" : "http://yojoyfrozenyogurt.com/wp-content/uploads/catablog/thumbnails/white%20chocolate%20mousse.jpg",
							"medium" : "http://www.countryliving.com/cm/countryliving/images/spicy-tomato-jam-3761-200.jpg",
							"large" : "http://api.myretail.cz/imagessuper_tomate-250g-14860-1_large.png"
						},
						"images" : [ {
    						"small" : "http://api.myretail.cz/images/chocolate-14861-1_small.png",
    						"medium" : "http://api.myretail.cz/images/chocolate-14861-1_medium.png",
    						"large" : "http://api.myretail.cz/images/chocolate-14861-1_large.png"
    					} ]
    				}
			},
			{
				_id: 594674984,
				qty: 1,
				price: -45.21,
				currency: 'czk',
				offer: null,
				product: null
			}
		]
	},
	{
		_id: 1864689,
		date: "2013-01-15T12:00:00",
		totalPrice: 292.60,
		originalPrice: 295.12,
		currency: 'czk',
		loyaltyPoints: 5,
		paymentType: {
			name: 'cash',
			title: 'hotovost'
		},
		branch: {
			name: 'Interspar Černý most',
			geolocation: {
				lat: 50.0725058,
				lon: 14.5421189
			},
			phones: [
				'+420 234 672 111',
				'+420 234 670 119'
			],
			address: {
				street: 'Nákupní 1/388',
				postcode: '102 00',
				city: 'Praha 10, Praha-Štěrboholy'
			}
		},
		items: [
			{
				_id: 4584168,
				qty: 3,
				price: 12.97,
				currency: 'czk',
				offer: null,
				"product" : {
    					"_id" : 146861,
    					"name" : "Čokoláda",
    					"title" : "Bílá čokoláda 120g",
    					"product_code" : "566489148",
    					"short_description" : "",
    					"description" : null,
    					"quantity" : 120,
    					"measure_unit" : "g",
    					"price" : 165.9,
    					"currency" : "czk",
    					"image": {
							"small" : "http://img.weiku.com/IMG/2010/11/26/1/product/36_38_tomato_paste17318_s.jpg",
							"medium" : "http://www.countryliving.com/cm/countryliving/images/spicy-tomato-jam-3761-200.jpg",
							"large" : "http://api.myretail.cz/imagessuper_tomate-250g-14860-1_large.png"
						},
						"images" : [ {
    						"small" : "http://api.myretail.cz/images/chocolate-14861-1_small.png",
    						"medium" : "http://api.myretail.cz/images/chocolate-14861-1_medium.png",
    						"large" : "http://api.myretail.cz/images/chocolate-14861-1_large.png"
    					} ]
    				}
			}
		]
	}
];