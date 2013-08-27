
var l = require('log-dispatch');
var _ = require('underscore');

var Notification = require('../models/Notification');

module.exports = exports = function (socket) {
	return new NotificationCtrl(socket);
};

var gets = {};

var NotificationCtrl = function (socket) {
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
	socket.on('/notifications', get(self.notifications));

	// PUT
	// notifier.put(socket).tags(['/shopping-carts', '/shopping-cart']).on('/shoppingCarts', self.shoppingCarts);
	socket.on('/set-notification-as-read', put(self.setAsRead));
	socket.on('/set-notification-as-old', put(self.setAsOld));
	socket.on('/add-notification', put(self.addNotification));
};

NotificationCtrl.prototype.notifications = function (data, cb) {
	var self = this;
	l.d('returned notifications');
	Notification.getNotifications(function (e, notifications) {
		if (e) return cb({ status: 'error', error: e.message });

		self.emit('/notifications', notifications);
	});
};

NotificationCtrl.prototype.setAsRead = function (notifications, cb) {
	l.d('notifications set as read');
	Notification.setAsRead(notifications, function (e, notifications) {
		if (e) {
			cb({ status: 'error', error: e.message });
			return;
		}

		cb({ status: 'ok', notifications: notifications });
	});
};

NotificationCtrl.prototype.setAsOld = function (notifications, cb) {
	l.d('notification set as old');
	Notification.setAsOld(notifications, function (e, notifications) {
		if (e) {
			cb({ status: 'error', error: e.message });
			return;
		}

		cb({ status: 'ok', notifications: notifications });
	});
};

NotificationCtrl.prototype.addNotification = function (notification, cb) {
	l.d('notification added');
	Notification.addNotification(notification, function (e) {
		if (e) {
			cb({ status: 'error', error: e.message });
			return;
		}

		cb({ status: 'ok', notification: notification });
	});
};
