
/**
 * 
 */

var NotificationModel = function (socket, cache) {
	this.className = 'NotificationModel';
	this.socket = socket;
	this.cache = cache;
	this.notifications = [];
};
NotificationModel.prototype = Object.clone(EventEmitter.prototype);
NotificationModel.prototype = _.extend(NotificationModel.prototype, {	
	getNotifications: function (callback) {
		var self = this;

		self.socket.on('/notifications', function (notifications) {
			self.notifications = notifications;
			self.trigger('change', notifications);
			callback(notifications);
		});

		var cached = this.cache.get('getNotifications-called');
		if (cached) return;
        this.cache.set('getNotifications-called', true);
		self.socket.emit('/notifications', {});
	},

	addMessage: function (notification, cb) {
		if (typeof cb === 'undefined')
			cb = function () {};

		var self = this;
		var notifications = self.notifications;
		// neopakovat stejné notifikace
		if (typeof notifications[0] !== 'undefined' 
			&& notifications[0].type === notification.type
			&& notifications[0].title === notification.title
			&& notifications[0].text === notification.text
			&& notifications[0].viewed === notification.viewed
			&& notifications[0].created === notification.created
			&& notifications[0].settings === notification.settings
			) return;

		self.socket.emit('/add-notification', notification, function (data) {
			if (data.status !== 'ok') {
				//@todo messageDisp.flash('Při přidávání zprávy nastala chyba.', 'error');
				return cb(new Error('Error while editing'));
			}

			cb(null);
		});
	},

	bindNotRead: function (callback) {
		var self = this;
		self.getNotifications(function (notifications) {
			var nots = _.filter(notifications, function (not) { return !not.viewed; });
			callback(nots);
		});
	},

	bindNewNotifications: function (callback) {
		var self = this;
		self.getNotifications(function (notifications) {
			var nots = _.filter(notifications, function (not) { return not.created; });
			callback(nots);
		});
	},

	setAsRead: function (nots, cb) {
		if (typeof cb === 'undefined')
			cb = function () {};

		var self = this;
		// může se zadat jedna nebo víc
		if (typeof nots === 'undefined') return;		
		if (!_.isArray(nots)) nots = [nots];

		var notIds = _.map(nots, function (not) { return not.oid; });
		self.socket.emit('/set-notification-as-read', nots, function (data) {
			if (data.status !== 'ok') {
				//@todo messageDisp.flash('Při nastavování zprávy nastala chyba.', 'error');
				return cb(new Error('Error while editing'));
			}

			cb(null);
		});
	},

	setAsOld: function (nots, cb) {
		if (typeof cb === 'undefined')
			cb = function () {};

		var self = this;
		// může se zadat jedna nebo víc
		if (typeof nots === 'undefined') return;		
		if (!_.isArray(nots)) nots = [nots];

		var notIds = _.map(nots, function (not) { return not.oid; });
		self.socket.emit('/set-notification-as-old', nots, function (data) {
			if (data.status !== 'ok') {
				//@todo messageDisp.flash('Při nastavování zprávy nastala chyba.', 'error');
				return cb(new Error('Error while editing'));
			}

			cb(null);
		});
	}

});

myRetail.factory('notificationModel', function (socket, cache) {
	var notificationModel = new NotificationModel(socket, cache);
	return notificationModel;
});
