
var MessageDisp = function (_t, notificationModel) {

	this.flash = function (text, type) {
		var message = {
			title: _t('Zpráva aplikace'),
			created: true,
			viewed: false,
			type: type,
			text: _t(text),
			settings: {},
			image: 'images/messages/type-app.png'
		};
		notificationModel.addMessage(message);
	};

	this.undo = function (text, ctrl, fn, args) {
		var message = {
			title: _t('Vrácení změn'),
			created: true,
			viewed: false,
			type: 'info',
			text: _t(text),
			settings: {
				type: 'button',
				ctrl: ctrl,
				fn: fn,
				args: args,
				btnIcon: 'icon-new icon-unshare'
			},
			image: 'images/messages/type-undo.png'
		};
		notificationModel.addMessage(message);
	};

};

myRetail.factory('messageDisp', function (_t, notificationModel) {
	var messageDisp = new MessageDisp(_t, notificationModel);
	return messageDisp;
});
