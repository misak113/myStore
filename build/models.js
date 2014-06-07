/*! myStore-client, version: 1.1.4, 2014-06-07 */
function Product(data) {
    var self = this;
    self.defaultData = {
        _id: null,
        id: null,
        name: "",
        price: 0,
        acquisitionPrice: 0,
        priceChange: 0
    }, data = _.extend(self.defaultData, data), _.extend(self, data);
}

function ShoppingCart(data) {
    data || (data = {});
    var self = this;
    self.defaultData = {
        _id: null,
        customerId: null,
        name: "",
        date: moment().format("YYYY-MM-DD HH:mm:ss"),
        totalPrice: 0,
        originalPrice: 0,
        currency: "czk",
        items: []
    }, data = _.extend(self.defaultData, data), _.extend(self, data), _.forEach(self.items, function(val, key) {
        self.items[key] = new ShoppingCart.Item(val);
    });
}

var CustomerModel = function(socket, memoryCache) {
    this.className = "CustomerModel", this.socket = socket, this.cache = memoryCache;
};

CustomerModel.prototype.getCustomer = function(id, cb) {
    this.socket.on("/customer", function(data) {
        cb(data);
    });
    var cached = this.cache.get("getCustomer-called-" + id);
    cached || (this.cache.set("getCustomer-called-" + id, !0), this.socket.emit("/customer", {
        customerId: id
    }));
}, myRetail.factory("customerModel", function(socket, memoryCache) {
    return new CustomerModel(socket, memoryCache);
});

var LoyaltyModel = function() {
    this.className = "LoyaltyModel", this.getPoints = function(callback) {
        callback(87);
    };
};

myRetail.factory("loyaltyModel", function(socket) {
    var loyaltyModel = new LoyaltyModel(socket);
    return loyaltyModel;
});

var NotificationModel = function(socket, memoryCache) {
    this.className = "NotificationModel", this.socket = socket, this.cache = memoryCache, 
    this.notifications = [];
};

NotificationModel.prototype = Object.clone(EventEmitter.prototype), NotificationModel.prototype = _.extend(NotificationModel.prototype, {
    getNotifications: function(callback) {
        var self = this;
        self.socket.on("/notifications", function(notifications) {
            self.notifications = notifications, self.trigger("change", notifications), callback(notifications);
        });
        var cached = this.cache.get("getNotifications-called");
        cached || (this.cache.set("getNotifications-called", !0), self.socket.emit("/notifications", {}));
    },
    addMessage: function(notification, cb) {
        "undefined" == typeof cb && (cb = function() {});
        var self = this, notifications = self.notifications;
        ("undefined" == typeof notifications[0] || notifications[0].type !== notification.type || notifications[0].title !== notification.title || notifications[0].text !== notification.text || notifications[0].viewed !== notification.viewed || notifications[0].created !== notification.created || notifications[0].settings !== notification.settings) && self.socket.emit("/add-notification", notification, function(data) {
            return "ok" !== data.status ? cb(new Error("Error while editing")) : void cb(null);
        });
    },
    bindNotRead: function(callback) {
        var self = this;
        self.getNotifications(function(notifications) {
            var nots = _.filter(notifications, function(not) {
                return !not.viewed;
            });
            callback(nots);
        });
    },
    bindNewNotifications: function(callback) {
        var self = this;
        self.getNotifications(function(notifications) {
            var nots = _.filter(notifications, function(not) {
                return not.created;
            });
            callback(nots);
        });
    },
    setAsRead: function(nots, cb) {
        "undefined" == typeof cb && (cb = function() {});
        var self = this;
        if ("undefined" != typeof nots) {
            _.isArray(nots) || (nots = [ nots ]);
            {
                _.map(nots, function(not) {
                    return not.oid;
                });
            }
            self.socket.emit("/set-notification-as-read", nots, function(data) {
                return "ok" !== data.status ? cb(new Error("Error while editing")) : void cb(null);
            });
        }
    },
    setAsOld: function(nots, cb) {
        "undefined" == typeof cb && (cb = function() {});
        var self = this;
        if ("undefined" != typeof nots) {
            _.isArray(nots) || (nots = [ nots ]);
            {
                _.map(nots, function(not) {
                    return not.oid;
                });
            }
            self.socket.emit("/set-notification-as-old", nots, function(data) {
                return "ok" !== data.status ? cb(new Error("Error while editing")) : void cb(null);
            });
        }
    }
}), myRetail.factory("notificationModel", function(socket, memoryCache) {
    var notificationModel = new NotificationModel(socket, memoryCache);
    return notificationModel;
});

var OfferModel = function(socket, memoryCache) {
    this.className = "OfferModel";
    var cache = memoryCache;
    this.markAsUnwanted = function() {}, this.getOffers = function(cb) {
        socket.on("/offers", function(data) {
            cb(data);
        });
        var cached = cache.get("getOffers-called");
        cached || (cache.set("getOffers-called", !0), socket.emit("/offers", {}));
    }, this.getOffer = function(id, cb) {
        socket.on("/offer", function(data) {
            cb(data);
        });
        var cached = cache.get("getOffer-called-" + id);
        cached || (cache.set("getOffer-called-" + id, !0), socket.emit("/offer", {
            offerId: id
        }));
    }, this.addComment = function(offerId, message, cb) {
        var comment = {
            text: message,
            author: "franta"
        }, data = {
            offerId: offerId,
            comment: comment
        };
        socket.emit("/offer/add-comment", data, function(comment) {
            cb(comment);
        });
    };
};

myRetail.factory("offerModel", function(socket, memoryCache) {
    var offerModel = new OfferModel(socket, memoryCache);
    return offerModel;
});

var ProductModel = function($http, config) {
    this.className = "ProductModel", this.getProduct = function(id, cb) {
        $http.get(config.serverUrl + "/product").success(function(res) {
            cb(res);
        });
    };
};

myRetail.factory("productModel", function($http, config) {
    var productModel = new ProductModel($http, config);
    return productModel;
});

var PurchaseModel = function(socket) {
    this.className = "PurchaseModel", this.getPurchases = function(cb) {
        socket.on("/purchases", {}), socket.emit("/purchases", function() {
            cb(res);
        });
    }, this.getPurchase = function(id, cb) {
        this.getPurchases(function(purchases) {
            var returnPurchase = null;
            angular.forEach(purchases, function(purchase) {
                purchase._id == id && (returnPurchase = purchase);
            }), null !== returnPurchase && cb(returnPurchase);
        });
    }, this.getPurchaseItem = function(id, cb) {
        this.getPurchase(1864686, function(purchase) {
            cb(purchase.items[0]);
        });
    };
};

myRetail.factory("purchaseModel", function(socket) {
    var purchaseModel = new PurchaseModel(socket);
    return purchaseModel;
});

var ShoppingCartModel = function(socket, messageDisp, memoryCache) {
    this.className = "ShoppingCartModel";
    var cache = memoryCache;
    this.getShoppingCart = function(shoppingCartId, cb) {
        socket.on("/shopping-cart", function(data) {
            cb(data);
        });
        var cached = cache.get("getShoppingCart-id-called-" + shoppingCartId);
        cached || (cache.set("getShoppingCart-id-called-" + shoppingCartId, !0), socket.emit("/shopping-cart", {
            shoppingCartId: shoppingCartId
        }));
    }, this.getByCustomerId = function(customerId, cb) {
        socket.on("/shopping-cart", function(data) {
            cb(data);
        });
        var cached = cache.get("getShoppingCart-customerId-called-" + customerId);
        cached || (cache.set("getShoppingCart-customerId-called-" + customerId, !0), socket.emit("/shopping-cart", {
            customerId: customerId
        }));
    }, this.getShoppingCarts = function(cb) {
        socket.on("/shopping-carts", function(data) {
            cb(data);
        });
        var cached = cache.get("getShoppingCarts-called");
        cached || (cache.set("getShoppingCarts-called", !0), socket.emit("/shopping-carts", {}));
    }, this.saveShoppingCart = function(shoppingCart, cb) {
        socket.emit("/save-shopping-cart", shoppingCart, function(data) {
            return "ok" === data.status ? cb(null, data.shoppingCart) : (messageDisp.flash("Při ukládání nákupního seznamu nastala chyba.", "error"), 
            void cb(new Error("Error while editing")));
        });
    }, this.addByProductId = function(shoppingCart, productId, cb) {
        socket.emit("/add-shopping-cart-item-by-product-id", {
            shoppingCart: shoppingCart,
            productId: productId
        }, function(data) {
            return "ok" === data.status ? void cb(null, data.shoppingCart) : (messageDisp.flash("Při vkládání produktu do nákupního seznamu nastala chyba.", "error"), 
            void cb(new Error("Error while editing")));
        });
    }, this.addComplement = function(shoppingCart, cb) {
        socket.emit("/add-shopping-cart-complement", {
            shoppingCart: shoppingCart
        }, function(data) {
            return "ok" === data.status ? void cb(null, data.shoppingCart) : (messageDisp.flash("Při vkládání komplementů do nákupního seznamu nastala chyba.", "error"), 
            void cb(new Error("Error while editing")));
        });
    }, this.removeShoppingCart = function(shoppingCart, cb) {
        socket.emit("/remove-shopping-cart", shoppingCart._id, function(data) {
            return "ok" === data.status ? cb(null) : (messageDisp.flash("Při mazání nákupního seznamu nastala chyba.", "error"), 
            void cb(new Error("Error while removing")));
        });
    }, this.unremoveShoppingCart = function(shoppingCartId, cb) {
        socket.emit("/unremove-shopping-cart", shoppingCartId, function(data) {
            return "ok" === data.status ? cb(null) : (messageDisp.flash("Při obnovení nákupního seznamu nastala chyba.", "error"), 
            void cb(new Error("Error while removing")));
        });
    };
};

myRetail.factory("shoppingCartModel", function(socket, messageDisp, memoryCache) {
    var model = new ShoppingCartModel(socket, messageDisp, memoryCache);
    return model;
});

var UserModel = function(socket, $timeout) {
    this.className = "UserModel";
    var self = this, timeToLogout = 432e3;
    this.WRONG_CREDENTIALS = 1, setInterval(function() {
        timeToLogout--;
    }, 1e3), this.login = function(username, password, remember, callback) {
        $timeout(function() {
            if ("franta" == username && "abc" == password) timeToLogout = 1200, callback(null, {}); else {
                var e = new Error("Špatné jméno nebo heslo");
                e.code = self.WRONG_CREDENTIALS, callback(e);
            }
        }, 2e3, !1);
    }, this.logout = function(callback) {
        timeToLogout = 0, callback();
    }, this.isLoggedIn = function(callback) {
        var isLoggedIn = timeToLogout > 0;
        return "function" == typeof callback && callback(isLoggedIn), isLoggedIn;
    };
};

myRetail.factory("userModel", function(socket, $timeout) {
    var userModel = new UserModel(socket, $timeout);
    return userModel;
}), Product.prototype.getAcquisitionPrice = function(membershipLevelId) {
    var multiplier = membershipLevelId - 1;
    return this.acquisitionPrice + multiplier * this.priceChange;
}, ShoppingCart.prototype.allChecked = function() {
    return !_.any(this.activeItems(), function(item) {
        return !item.checked;
    });
}, ShoppingCart.prototype.notCheckedItems = function() {
    return _.filter(this.activeItems(), function(item) {
        return !item.checked;
    });
}, ShoppingCart.prototype.activeItems = function() {
    return _.filter(this.items, function(item) {
        return item.active;
    });
}, ShoppingCart.prototype.getTotalPrice = function() {
    return _.reduce(this.activeItems(), function(memo, item) {
        return memo + item.product.price * item.qty;
    }, 0);
}, ShoppingCart.prototype.getTotalAcquisitionPrice = function(membershipLevelId) {
    return _.reduce(this.activeItems(), function(memo, item) {
        return memo + item.product.getAcquisitionPrice(membershipLevelId) * item.qty;
    }, 0);
}, ShoppingCart.prototype.getTotalAskingPrice = function() {
    return _.reduce(this.activeItems(), function(memo, item) {
        return memo + item.askingPrice * item.qty;
    }, 0);
}, ShoppingCart.prototype.getTotalQty = function() {
    return _.reduce(this.activeItems(), function(memo, item) {
        return memo + item.qty;
    }, 0);
}, ShoppingCart.prototype.toObject = function() {
    var obj = angular.copy(this), allowed_keys = _.keys(this.defaultData);
    return _.forEach(_.keys(obj), function(key) {
        _.contains(allowed_keys, key) || delete obj[key];
    }), _.forEach(obj.items, function(item, key) {
        obj.items[key] = item.toObject();
    }), obj;
}, ShoppingCart.Item = function(data) {
    var self = this;
    self.defaultData = {
        _id: null,
        name: "",
        date: moment().format("YYYY-MM-DD HH:mm:ss"),
        checked: !1,
        check_date: null,
        qty: 1,
        active: !0,
        askingPrice: 0,
        product: new Product({})
    }, data = _.extend(self.defaultData, data), data.product = new Product(data.product), 
    _.extend(self, data);
}, ShoppingCart.Item.prototype.toObject = function() {
    var obj = angular.copy(this), allowed_keys = _.keys(this.defaultData);
    return _.forEach(_.keys(obj), function(key) {
        _.contains(allowed_keys, key) || delete obj[key];
    }), obj;
}, myRetail.factory("ShoppingCart", function() {
    return ShoppingCart;
});