
var mongoose = require('mongoose');
var l = require('log-dispatch');
var _ = require('underscore');
var moment = require('moment');

var SettingsSchema = new mongoose.Schema({
	type: String,
	ctrl: String,
	fn: String,
	args: Array,
	btnIcon: String
});
var schema = mongoose.Schema({
	type: String, 
	date: Date,
	title: String,
	text: String,
	viewed: Boolean,
	created: Boolean,
	image: String,
	settings: Object /*SettingsSchema*/ // @todo
});

var Notification = mongoose.model('Notification', schema);

Notification.getNotifications = function (cb) {
	Notification.find({})
	.sort('-date')
	.limit(15)
	.exec(function (e, notifications) {
		if (e) return cb(e);

		var notificationsData = [];
		// mark offers viewed by user
		notifications.forEach(function (notification) {
			notificationsData.push(notification.toObject());
		});
		cb(null, notifications);
	});
};

Notification.setAsRead = function (notifications, cb) {
	var ids = _.map(notifications, function (not) {
		return not._id;
	});
	l.log(ids);
	Notification.update({ _id: { $in: ids } }
		, { $set: { viewed: true } }
		, { multi: true }
		, function (e) {
		if (e) return cb(e);

		notifications.forEach(function (notification) {
			notification.viewed = true;
		});
		cb(null, notifications);
	});
};

Notification.setAsOld = function (notifications, cb) {
	var ids = _.map(notifications, function (not) {
		return not._id;
	});
	Notification.update({ _id: { $in: ids } }
		, { $set: { created: false } }
		, { multi: true }
		, function (e) {
		if (e) return cb(e);

		notifications.forEach(function (notification) {
			notification.created = false;
		});
		cb(null, notifications);
	});
};

Notification.addNotification = function (notification, cb) {
	notification._id = new mongoose.Types.ObjectId();
	notification.date = moment().format('YYYY-MM-DD HH:mm:ss');
	// default is active
	Notification.create(notification, function (e, notification) {
		if (e) return cb(e);

		cb(null, notification.toObject());
	});
};


exports = module.exports = Notification;
