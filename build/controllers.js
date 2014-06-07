/*! myStore-client, version: 1.1.4, 2014-06-07 */
function AppCtrl($scope, $timeout, $route, loadingDisp, offlineStorage, authDisp, $location) {
    offlineStorage.storeAll(), authDisp.startControl(), $scope.$on("$routeChangeStart", function(ngEv, next, current) {
        authDisp.control(next, current);
    }), $scope.$on("$routeChangeSuccess", function() {
        offlineStorage.set("app-lastVisitedPageRoute", $location.$$path);
    }), $scope.init = function() {
        var url = offlineStorage.get("app-lastVisitedPageRoute");
        url && $location.path(url);
    }, loadingDisp.onReload(function() {
        $timeout(function() {
            $route.reload(), loadingDisp.loading(!1);
        }, 1e3);
    }), $scope.navTemplate = "templates/nav.html", $scope.pulldownTemplate = "templates/pulldown.html";
}

function BargainingCtrl($scope, customerModel, loadingDisp, messageDisp, shoppingCartModel, ShoppingCart) {
    $scope.customerId = "", $scope.customer = null, $scope.shoppingCart = null, $scope.findCustomer = function() {
        $scope.customer = null, $scope.shoppingCart = null, loadingDisp.loading(!0, function() {}), 
        customerModel.getCustomer($scope.customerId, function(customer) {
            $scope.customer || ($scope.customer = customer, shoppingCartModel.getByCustomerId(customer.id, function(shoppingCart) {
                $scope.shoppingCart || (loadingDisp.loading(!1), $scope.shoppingCart = new ShoppingCart(shoppingCart), 
                $scope.shoppingCart.customerId = $scope.customer.id, $scope.$apply());
            }));
        });
    }, $scope.removeItem = function(itemToRemove) {
        itemToRemove.active = !1, $scope.save();
    }, $scope.save = function() {
        shoppingCartModel.saveShoppingCart($scope.shoppingCart.toObject(), function() {});
    }, $scope.addProduct = function() {
        loadingDisp.loading(!0, function() {}), shoppingCartModel.addByProductId($scope.shoppingCart.toObject(), $scope.productId, function(e, shoppingCart) {
            e || (loadingDisp.loading(!1), $scope.productId = null, $scope.shoppingCart = new ShoppingCart(shoppingCart), 
            $scope.$apply());
        });
    }, $scope.approve = function() {
        messageDisp.flash("Smlouvání pro zákazníka bylo schváleno");
    }, $scope.addComplement = function() {
        loadingDisp.loading(!0, function() {}), shoppingCartModel.addComplement($scope.shoppingCart.toObject(), function(e, shoppingCart) {
            e || (loadingDisp.loading(!1), $scope.shoppingCart = new ShoppingCart(shoppingCart), 
            $scope.$apply());
        });
    }, $scope.getTotalEarningPrice = function(membershipLevelId) {
        return $scope.shoppingCart.getTotalAskingPrice() - $scope.shoppingCart.getTotalAcquisitionPrice(membershipLevelId);
    }, $scope.getClassByMembershipLevel = function() {
        if (!$scope.customer) return "";
        switch ($scope.customer.membershipLevel.id) {
          case 6:
            return "label-important";

          case 5:
            return "label-warning";

          case 4:
            return "";

          case 3:
            return "label-inverse";

          case 2:
            return "label-info";

          case 1:
            return "label-success";

          default:
            return "";
        }
    }, $scope.getClassByShoppingCartPrice = function() {
        var totalEarningPrice = $scope.getTotalEarningPrice($scope.customer.membershipLevel.id);
        return 0 > totalEarningPrice ? "badge-important" : totalEarningPrice > 0 ? "badge-success" : "";
    };
}

function EditShoppingCartCtrl($scope, $routeParams, shoppingCartModel, ShoppingCart) {
    $scope.newItem = new ShoppingCart.Item({}), $scope.newItemId = null, $scope.shoppingCart = new ShoppingCart({}), 
    "undefined" != typeof $routeParams.shoppingCartId && shoppingCartModel.getShoppingCart($routeParams.shoppingCartId, function(shoppingCart) {
        $scope.shoppingCart = new ShoppingCart(shoppingCart), $scope.$apply();
    }), $scope.addItem = function() {
        $scope.shoppingCart.items.unshift($scope.newItem), $scope.newItem = new ShoppingCart.Item({}), 
        $scope.save();
    }, $scope.removeItem = function(itemToRemove) {
        itemToRemove.active = !1, $scope.save();
    }, $scope.unremoveItem = function(itemToUnremove) {
        itemToUnremove.active = !0, $scope.save();
    }, $scope.countAdd = function(item) {
        item.qty++, $scope.save();
    }, $scope.countSub = function(item) {
        item.qty--, $scope.save();
    }, $scope.save = function() {
        shoppingCartModel.saveShoppingCart($scope.shoppingCart.toObject(), function(e, shoppingCart) {
            e || ($scope.shoppingCart = new ShoppingCart(shoppingCart), $scope.$apply());
        });
    };
}

function ExitCtrl($scope, native, offlineStorage) {
    native.ready() && (offlineStorage.set("app-lastVisitedPageRoute", null), native.WL.App.close());
}

function GroupCtrl() {}

function HomeCtrl($scope, offerModel, loyaltyModel) {
    offerModel.getOffers(function(offers) {
        $scope.countOffers = offers.length, $scope.countNewOffers = _.filter(offers, function(offer) {
            return !offer.viewed;
        }).length, $scope.$apply();
    }), loyaltyModel.getPoints(function(loyaltyPoints) {
        var edges = [ 40, 50, 60 ];
        $scope.loyaltyPoints = loyaltyPoints, $scope.estPercent = [], $scope.levelPercent = [];
        var maxEdge = _.reduce(edges, function(memo, num) {
            return memo + num;
        }, 0);
        _.forEach(edges, function(edge) {
            var est = edge / maxEdge * 100;
            $scope.estPercent.push(est);
            var percent = (edge > loyaltyPoints ? loyaltyPoints : edge) / maxEdge * 100;
            $scope.levelPercent.push(percent), loyaltyPoints -= edge;
        });
    }), $scope.nextQR = function() {
        alert("next QR");
    };
}

function LoginCtrl($scope, $location, userModel, loadingDisp, messageDisp, offlineStorage) {
    $scope.loading = !1, $scope.login = function() {
        $scope.loading = !0, loadingDisp.loading(!0, function() {
            $scope.loading = !1, $scope.$apply();
        }), userModel.login($scope.username, $scope.password, $scope.remember, function(e) {
            if ($scope.loading !== !1) {
                if (loadingDisp.loading(!1), e) return e.code === userModel.WRONG_CREDENTIALS ? messageDisp.flash("Zadal jste nesprávné jméno nebo heslo. Zkontrolujte a opakujte.", "error") : messageDisp.flash("Při přihlašování nastala chyba, zkuste znovu později.", "error");
                messageDisp.flash("Byl jste úspěšně přihlášen.", "success"), $location.path("/home"), 
                $scope.$apply();
            }
        });
    };
    var userLogin = offlineStorage.get("user-login", {});
    $scope.username = userLogin.username ? userLogin.username : "", $scope.remember = userLogin.remember ? !0 : !1;
    var changeUserLogin = function() {
        var userLogin = offlineStorage.get("user-login", {});
        userLogin.username = $scope.username, userLogin.password = $scope.password, userLogin.remember = $scope.remember, 
        offlineStorage.set("user-login", userLogin);
    };
    $scope.$watch("username", changeUserLogin, !0), $scope.$watch("password", changeUserLogin, !0), 
    $scope.$watch("remember", changeUserLogin, !0);
}

function LogoutCtrl($scope, userModel, $location) {
    userModel.logout(function() {
        $location.path("/login");
    });
}

function MenuCtrl($scope, native) {
    $scope.items = [ {
        name: "Můj účet",
        controller: "AccountCtrl",
        url: "/moje-id",
        icon: "user"
    }, {
        name: "Nákupy",
        controller: "PurchaseListCtrl",
        url: "/purchase-list",
        icon: "shopping-cart"
    }, {
        name: "Smlouvání",
        controller: "BargainingCtrl",
        url: "/bargaining",
        icon: "coins"
    }, {
        name: "Skupina",
        controller: "GroupCtrl",
        url: "/group",
        icon: "group"
    }, {
        name: "Nastavení",
        controller: "SettingCtrl",
        url: "/setting",
        icon: "cogwheel"
    }, {
        name: "Odhlásit",
        controller: "LogoutCtrl",
        url: "/logout",
        icon: "delete"
    } ], native.ready() && $scope.items.push({
        name: "Zavřít",
        controller: "ExitCtrl",
        url: "/exit",
        icon: "power"
    });
}

function MessagesCtrl($scope, notificationModel, $timeout, $controller) {
    var self = this;
    $scope.messages = [], $scope.notReadMessages = [], notificationModel.getNotifications(function(notifications) {
        $scope.messages = notifications, $scope.$apply();
    }), notificationModel.bindNotRead(function(notifications) {
        $scope.notReadMessages = notifications, $scope.$apply();
    }), $scope.$on("$viewContentLoaded", function() {
        $timeout(function() {
            0 !== $scope.notReadMessages.length && notificationModel.setAsRead($scope.notReadMessages);
        }, 4e3);
    }), $scope.callButton = function(message) {
        {
            var $ctrlScope = $scope;
            $controller(message.settings.ctrl, {
                $scope: $ctrlScope
            });
        }
        $ctrlScope[message.settings.fn].apply(self, message.settings.args);
    };
}

function NavCtrl($scope, $window, notificationModel, $timeout) {
    notificationModel.bindNotRead(function(notRead) {
        $scope.countNotReadMessages = notRead.length, $scope.typeMessagesInfo = _.all(notRead, function(n) {
            return "info" === n.type;
        }), $scope.typeMessagesError = _.all(notRead, function(n) {
            return "error" === n.type;
        }), $scope.typeMessagesWarning = _.all(notRead, function(n) {
            return "warning" === n.type;
        }), $scope.$apply();
    }), notificationModel.bindNewNotifications(function(notifications) {
        $scope.newMessages = [], _.forEach(notifications, function(not) {
            not.isError = "error" === not.type, not.isInfo = "info" === not.type, not.isSuccess = "success" === not.type, 
            _.contains([ "error", "warning", "success" ], not.type) && $scope.newMessages.push(not);
        }), notifications.length > 0 && $timeout(function() {
            notificationModel.setAsOld(notifications);
        }, 5e3), $scope.$apply();
    }), $scope.setMessageAsOld = function(message) {
        notificationModel.setAsOld(message);
    }, $scope.goBack = function($event) {
        $event.preventDefault(), $window.history.back();
    };
}

function OfferCtrl($scope, $routeParams, offerModel, $window) {
    var id = $routeParams.offerId;
    offerModel.getOffer(id, function(offer) {
        $scope.offer = offer, $scope.$apply();
    }), $scope.goBack = function() {
        $window.history.back();
    };
}

function OfferListCtrl($scope, offerModel) {
    offerModel.getOffers(function(offers) {
        $scope.offers = offers, $scope.$apply();
    }), $scope.unwanted = function(offer) {
        var index = $scope.offers.indexOf(offer);
        $scope.offers.splice(index, 1), offerModel.markAsUnwanted(offer);
    };
}

function ProductCtrl($scope, $routeParams, productModel) {
    var id = $routeParams.productId;
    productModel.getProduct(id, function(product) {
        $scope.product = product;
    }), $scope.goBack = function() {
        window.history.back();
    };
}

function PurchaseCtrl($scope, $routeParams, purchaseModel, _t, config) {
    var id = $routeParams.purchaseId;
    purchaseModel.getPurchase(id, function(purchase) {
        $scope.purchase = purchase, angular.forEach(purchase.items, function(item, key) {
            $scope.purchase.items[key].detailHref = "#", null !== item.product && ($scope.purchase.items[key].detailHref = "#/product/" + item.product._id), 
            null !== item.offer ? ($scope.purchase.items[key].additionalClass = "reduced", $scope.purchase.items[key].detailHref = "#/offer/" + item.offer._id) : $scope.purchase.items[key].hideSalePrice = !0, 
            null === item.offer && null === item.product && ($scope.purchase.items[key].additionalClass = "summed-discounts"), 
            null === item.product && item.price < 0 && ($scope.purchase.items[key].product = {
                name: _t("Odečtení slevy"),
                image: {
                    small: config.baseUrl + "/images/sale.png"
                }
            });
        });
    }), $scope.paymentTypes = {
        visa: {
            image: config.baseUrl + "/images/paymentType/visa.png"
        },
        cash: {
            image: config.baseUrl + "/images/paymentType/cash.png"
        }
    };
}

function PurchaseListCtrl($scope, purchaseModel) {
    purchaseModel.getPurchases(function(purchases) {
        $scope.purchases = purchases;
    }), $scope.shoppingCartListTemplate = "templates/shoppingCartList.html";
}

function SettingCtrl($scope) {
    $scope.sound = !0, $scope.vibration = !1, $scope.light = !1, $scope.notification = !0, 
    $scope.wifi = !0, $scope.bluetooth = !1, $scope.gps = !0, $scope.bts = !0;
}

function ShoppingCartCtrl($scope, $routeParams, shoppingCartModel, ShoppingCart) {
    $scope.shoppingCart = new ShoppingCart({}), shoppingCartModel.getShoppingCart($routeParams.shoppingCartId, function(shoppingCart) {
        $scope.shoppingCart = new ShoppingCart(shoppingCart), $scope.$apply();
    }), $scope.getItemClass = function(item) {
        return item.checked ? "checked" : "";
    }, $scope.save = function(item) {
        item.check_date = moment().format("YYYY-MM-DD HH:mm:ss"), shoppingCartModel.saveShoppingCart($scope.shoppingCart.toObject(), function() {});
    };
}

function ShoppingCartListCtrl($scope, shoppingCartModel, ShoppingCart, messageDisp) {
    $scope.shoppingCarts = [], shoppingCartModel.getShoppingCarts(function(shoppingCarts) {
        $scope.shoppingCarts = [], _.forEach(shoppingCarts, function(shoppingCart) {
            $scope.shoppingCarts.push(new ShoppingCart(shoppingCart));
        }), $scope.$apply();
    }), $scope.getClass = function(shoppingCart) {
        return shoppingCart.allChecked() ? "all-checked" : "";
    }, $scope.removeShoppingCart = function(shoppingCartToRemove) {
        shoppingCartModel.removeShoppingCart(shoppingCartToRemove.toObject(), function(e) {
            e || messageDisp.undo('Byl odstraněn nákupní seznam "' + shoppingCartToRemove.name + '". Kliknutím na tlačítko vraťte zpět.', "ShoppingCartListCtrl", "unremoveShoppingCart", [ shoppingCartToRemove._id ]);
        });
    }, $scope.unremoveShoppingCart = function(shoppingCartId) {
        shoppingCartModel.unremoveShoppingCart(shoppingCartId, function(e) {
            e || messageDisp.flash("Nákupní seznam byl znovu obnoven.", "info");
        });
    };
}