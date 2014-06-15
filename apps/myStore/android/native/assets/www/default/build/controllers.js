
/* JavaScript content from build/controllers.js in folder common */
/*! myStore-client, version: 1.1.4, 2014-06-16 */
function AppCtrl($scope, $timeout, $route, loadingDisp, offlineStorage, authDisp, $location, locationDispatcher, $window) {
    offlineStorage.storeAll();
    authDisp.startControl();
    $scope.$on("$routeChangeStart", function(ngEv, next, current) {
        authDisp.control(next, current);
    });
    $scope.$on("$routeChangeSuccess", function(ngEv, current, previous) {
        offlineStorage.set("app-lastVisitedPageRoute", $location.$$path);
    });
    $scope.init = function() {
        var url = offlineStorage.get("app-lastVisitedPageRoute");
        if (url) $location.path(url);
    };
    loadingDisp.onReload(function() {
        $timeout(function() {
            $route.reload();
            loadingDisp.loading(false);
        }, 1e3);
    });
    var continualProcess = function() {
        locationDispatcher.storeLocation(function() {});
        $timeout(continualProcess, 2e3);
    };
    document.addEventListener("deviceready", function() {
        continualProcess();
    }, false);
    $scope.navTemplate = "templates/nav.html";
    $scope.pulldownTemplate = "templates/pulldown.html";
}

function BargainingCtrl($scope, customerModel, loadingDisp, messageDisp, shoppingCartModel, ShoppingCart) {
    $scope.customerId = "";
    $scope.customer = null;
    $scope.shoppingCart = null;
    $scope.findCustomer = function() {
        $scope.customer = null;
        $scope.shoppingCart = null;
        loadingDisp.loading(true, function() {});
        customerModel.getCustomer($scope.customerId, function(customer) {
            if ($scope.customer) {
                return;
            }
            $scope.customer = customer;
            shoppingCartModel.getByCustomerId(customer.id, function(shoppingCart) {
                if ($scope.shoppingCart) {
                    return;
                }
                loadingDisp.loading(false);
                $scope.shoppingCart = new ShoppingCart(shoppingCart);
                $scope.shoppingCart.customerId = $scope.customer.id;
                $scope.$apply();
            });
        });
    };
    $scope.removeItem = function(itemToRemove) {
        itemToRemove.active = false;
        $scope.save();
    };
    $scope.save = function() {
        shoppingCartModel.saveShoppingCart($scope.shoppingCart.toObject(), function(e, shoppingCart) {});
    };
    $scope.addProduct = function() {
        loadingDisp.loading(true, function() {});
        shoppingCartModel.addByProductId($scope.shoppingCart.toObject(), $scope.productId, function(e, shoppingCart) {
            if (e) {
                return;
            }
            loadingDisp.loading(false);
            $scope.productId = null;
            $scope.shoppingCart = new ShoppingCart(shoppingCart);
            $scope.$apply();
        });
    };
    $scope.approve = function() {
        messageDisp.flash("Smlouvání pro zákazníka bylo schváleno");
    };
    $scope.addComplement = function() {
        loadingDisp.loading(true, function() {});
        shoppingCartModel.addComplement($scope.shoppingCart.toObject(), function(e, shoppingCart) {
            if (e) {
                return;
            }
            loadingDisp.loading(false);
            $scope.shoppingCart = new ShoppingCart(shoppingCart);
            $scope.$apply();
        });
    };
    $scope.getTotalEarningPrice = function(membershipLevelId) {
        return $scope.shoppingCart.getTotalAskingPrice() - $scope.shoppingCart.getTotalAcquisitionPrice(membershipLevelId);
    };
    $scope.getClassByMembershipLevel = function() {
        if (!$scope.customer) {
            return "";
        }
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
    };
    $scope.getClassByShoppingCartPrice = function() {
        var totalEarningPrice = $scope.getTotalEarningPrice($scope.customer.membershipLevel.id);
        if (totalEarningPrice < 0) {
            return "badge-important";
        }
        if (totalEarningPrice > 0) {
            return "badge-success";
        }
        return "";
    };
}

function EditShoppingCartCtrl($scope, $routeParams, shoppingCartModel, ShoppingCart) {
    $scope.newItem = new ShoppingCart.Item({});
    $scope.newItemId = null;
    $scope.shoppingCart = new ShoppingCart({});
    if (typeof $routeParams.shoppingCartId !== "undefined") {
        shoppingCartModel.getShoppingCart($routeParams.shoppingCartId, function(shoppingCart) {
            $scope.shoppingCart = new ShoppingCart(shoppingCart);
            $scope.$apply();
        });
    }
    $scope.addItem = function() {
        $scope.shoppingCart.items.unshift($scope.newItem);
        $scope.newItem = new ShoppingCart.Item({});
        $scope.save();
    };
    $scope.removeItem = function(itemToRemove) {
        itemToRemove.active = false;
        $scope.save();
    };
    $scope.unremoveItem = function(itemToUnremove) {
        itemToUnremove.active = true;
        $scope.save();
    };
    $scope.countAdd = function(item) {
        item.qty++;
        $scope.save();
    };
    $scope.countSub = function(item) {
        item.qty--;
        $scope.save();
    };
    $scope.save = function() {
        shoppingCartModel.saveShoppingCart($scope.shoppingCart.toObject(), function(e, shoppingCart) {
            if (e) return;
            $scope.shoppingCart = new ShoppingCart(shoppingCart);
            $scope.$apply();
        });
    };
}

function ExitCtrl($scope, native, offlineStorage) {
    if (!native.ready()) return;
    offlineStorage.set("app-lastVisitedPageRoute", null);
    native.WL.App.close();
}

function GroupCtrl($scope) {}

function HomeCtrl($scope, offerModel, loyaltyModel) {
    offerModel.getOffers(function(offers) {
        $scope.countOffers = offers.length;
        $scope.countNewOffers = _.filter(offers, function(offer) {
            return !offer.viewed;
        }).length;
        $scope.$apply();
    });
    loyaltyModel.getPoints(function(loyaltyPoints) {
        var edges = [ 40, 50, 60 ];
        $scope.loyaltyPoints = loyaltyPoints;
        $scope.estPercent = [];
        $scope.levelPercent = [];
        var maxEdge = _.reduce(edges, function(memo, num) {
            return memo + num;
        }, 0);
        _.forEach(edges, function(edge, i) {
            var est = edge / maxEdge * 100;
            $scope.estPercent.push(est);
            var percent = (loyaltyPoints < edge ? loyaltyPoints : edge) / maxEdge * 100;
            $scope.levelPercent.push(percent);
            loyaltyPoints -= edge;
        });
    });
    $scope.nextQR = function($event) {
        alert("next QR");
    };
}

function LoginCtrl($scope, $location, userModel, loadingDisp, messageDisp, offlineStorage, authDisp, deviceRecorder) {
    $scope.loading = false;
    $scope.login = function() {
        $scope.loading = true;
        loadingDisp.loading(true, function() {
            $scope.loading = false;
            $scope.$apply();
        });
        userModel.login($scope.username, $scope.password, $scope.remember, function(e, verificationHash) {
            if ($scope.loading === false) return;
            loadingDisp.loading(false);
            $scope.loading = false;
            if (e) {
                if (e.code === userModel.WRONG_CREDENTIALS) {
                    return messageDisp.flash("Zadal jste nesprávné jméno nebo heslo. Zkontrolujte a opakujte.", "error");
                }
                return messageDisp.flash("Při přihlašování nastala chyba, zkuste znovu později.", "error");
            }
            authDisp.setVerificationHash(verificationHash);
            deviceRecorder.storeDevice(function() {});
            messageDisp.flash("Byl jste úspěšně přihlášen.", "success");
            $location.path("/home");
            $scope.$apply();
        });
    };
    var userLogin = offlineStorage.get("user-login", {});
    $scope.username = userLogin.username ? userLogin.username : "";
    $scope.remember = userLogin.remember ? true : false;
    var changeUserLogin = function() {
        var userLogin = offlineStorage.get("user-login", {});
        userLogin.username = $scope.username;
        userLogin.password = $scope.password;
        userLogin.remember = $scope.remember;
        offlineStorage.set("user-login", userLogin);
    };
    $scope.$watch("username", changeUserLogin, true);
    $scope.$watch("password", changeUserLogin, true);
    $scope.$watch("remember", changeUserLogin, true);
}

function LogoutCtrl($scope, authDisp, $location) {
    authDisp.setVerificationHash(null);
    $location.path("/login");
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
    } ];
    if (native.ready()) {
        $scope.items.push({
            name: "Zavřít",
            controller: "ExitCtrl",
            url: "/exit",
            icon: "power"
        });
    }
}

function MessagesCtrl($scope, notificationModel, $timeout, $controller) {
    var self = this;
    $scope.messages = [];
    $scope.notReadMessages = [];
    notificationModel.getNotifications(function(notifications) {
        $scope.messages = notifications;
        $scope.$apply();
    });
    notificationModel.bindNotRead(function(notifications) {
        $scope.notReadMessages = notifications;
        $scope.$apply();
    });
    $scope.$on("$viewContentLoaded", function() {
        $timeout(function() {
            if ($scope.notReadMessages.length === 0) return;
            notificationModel.setAsRead($scope.notReadMessages);
        }, 4e3);
    });
    $scope.callButton = function(message) {
        var $ctrlScope = $scope;
        var ctrl = $controller(message.settings.ctrl, {
            $scope: $ctrlScope
        });
        $ctrlScope[message.settings.fn].apply(self, message.settings.args);
    };
}

function NavCtrl($scope, $window, notificationModel, $timeout) {
    notificationModel.bindNotRead(function(notRead) {
        $scope.countNotReadMessages = notRead.length;
        $scope.typeMessagesInfo = _.all(notRead, function(n) {
            return n.type === "info";
        });
        $scope.typeMessagesError = _.all(notRead, function(n) {
            return n.type === "error";
        });
        $scope.typeMessagesWarning = _.all(notRead, function(n) {
            return n.type === "warning";
        });
        $scope.$apply();
    });
    notificationModel.bindNewNotifications(function(notifications) {
        $scope.newMessages = [];
        _.forEach(notifications, function(not) {
            not.isError = not.type === "error";
            not.isInfo = not.type === "info";
            not.isSuccess = not.type === "success";
            if (_.contains([ "error", "warning", "success" ], not.type)) $scope.newMessages.push(not);
        });
        if (notifications.length > 0) $timeout(function() {
            notificationModel.setAsOld(notifications);
        }, 5e3);
        $scope.$apply();
    });
    $scope.setMessageAsOld = function(message) {
        notificationModel.setAsOld(message);
    };
    $scope.goBack = function($event) {
        $event.preventDefault();
        $window.history.back();
    };
}

function OfferCtrl($scope, $routeParams, offerModel, $window) {
    $scope.message = "";
    var id = $routeParams.offerId;
    offerModel.getOffer(id, function(offer) {
        $scope.offer = offer;
        $scope.$apply();
    });
    $scope.goBack = function() {
        $window.history.back();
    };
    $scope.addComment = function() {
        offerModel.addComment(id, $scope.message, function(comment) {
            $scope.message = "";
            $scope.offer.comments.unshift(comment);
            $scope.apply();
        });
    };
}

function OfferListCtrl($scope, offerModel) {
    offerModel.getOffers(function(offers) {
        $scope.offers = offers;
        $scope.$apply();
    });
    $scope.unwanted = function(offer) {
        var index = $scope.offers.indexOf(offer);
        $scope.offers.splice(index, 1);
        offerModel.markAsUnwanted(offer);
    };
}

function ProductCtrl($scope, $routeParams, productModel) {
    var id = $routeParams.productId;
    productModel.getProduct(id, function(product) {
        $scope.product = product;
    });
    $scope.goBack = function() {
        window.history.back();
    };
}

function PurchaseCtrl($scope, $routeParams, purchaseModel, _t, config) {
    var id = $routeParams.purchaseId;
    purchaseModel.getPurchase(id, function(purchase) {
        $scope.purchase = purchase;
        angular.forEach(purchase.items, function(item, key) {
            $scope.purchase.items[key].detailHref = "#";
            if (item.product !== null) {
                $scope.purchase.items[key].detailHref = "#/product/" + item.product._id;
            }
            if (item.offer !== null) {
                $scope.purchase.items[key].additionalClass = "reduced";
                $scope.purchase.items[key].detailHref = "#/offer/" + item.offer._id;
            } else {
                $scope.purchase.items[key].hideSalePrice = true;
            }
            if (item.offer === null && item.product === null) {
                $scope.purchase.items[key].additionalClass = "summed-discounts";
            }
            if (item.product === null && item.price < 0) {
                $scope.purchase.items[key].product = {
                    name: _t("Odečtení slevy"),
                    image: {
                        small: config.baseUrl + "/images/sale.png"
                    }
                };
            }
        });
    });
    $scope.paymentTypes = {
        visa: {
            image: config.baseUrl + "/images/paymentType/visa.png"
        },
        cash: {
            image: config.baseUrl + "/images/paymentType/cash.png"
        }
    };
}

function PurchaseListCtrl($scope, purchaseModel, shoppingCartModel) {
    purchaseModel.getPurchases(function(purchases) {
        $scope.purchases = purchases;
    });
    $scope.shoppingCartListTemplate = "templates/shoppingCartList.html";
}

function SettingCtrl($scope) {
    $scope.sound = true;
    $scope.vibration = false;
    $scope.light = false;
    $scope.notification = true;
    $scope.wifi = true;
    $scope.bluetooth = false;
    $scope.gps = true;
    $scope.bts = true;
}

function ShoppingCartCtrl($scope, $routeParams, shoppingCartModel, ShoppingCart) {
    $scope.shoppingCart = new ShoppingCart({});
    shoppingCartModel.getShoppingCart($routeParams.shoppingCartId, function(shoppingCart) {
        $scope.shoppingCart = new ShoppingCart(shoppingCart);
        $scope.$apply();
    });
    $scope.getItemClass = function(item) {
        return item.checked ? "checked" : "";
    };
    $scope.save = function(item) {
        item.check_date = moment().format("YYYY-MM-DD HH:mm:ss");
        shoppingCartModel.saveShoppingCart($scope.shoppingCart.toObject(), function(e, shoppingCart) {});
    };
}

function ShoppingCartListCtrl($scope, shoppingCartModel, ShoppingCart, messageDisp) {
    $scope.shoppingCarts = [];
    shoppingCartModel.getShoppingCarts(function(shoppingCarts) {
        $scope.shoppingCarts = [];
        _.forEach(shoppingCarts, function(shoppingCart) {
            $scope.shoppingCarts.push(new ShoppingCart(shoppingCart));
        });
        $scope.$apply();
    });
    $scope.getClass = function(shoppingCart) {
        return shoppingCart.allChecked() ? "all-checked" : "";
    };
    $scope.removeShoppingCart = function(shoppingCartToRemove) {
        shoppingCartModel.removeShoppingCart(shoppingCartToRemove.toObject(), function(e) {
            if (e) return;
            messageDisp.undo('Byl odstraněn nákupní seznam "' + shoppingCartToRemove.name + '". Kliknutím na tlačítko vraťte zpět.', "ShoppingCartListCtrl", "unremoveShoppingCart", [ shoppingCartToRemove._id ]);
        });
    };
    $scope.unremoveShoppingCart = function(shoppingCartId) {
        shoppingCartModel.unremoveShoppingCart(shoppingCartId, function(e) {
            if (e) return;
            messageDisp.flash("Nákupní seznam byl znovu obnoven.", "info");
        });
    };
}

