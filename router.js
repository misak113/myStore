
var express = require('express');
var socketio = require('socket.io');
var http = require('http');
var path = require('path');
var l = require('log-dispatch');

var config = require('./config/config');

var allowCrossDomain = require('./plugins/allowCrossDomain');

// Controllers
var OfferCtrl = require('./controllers/OfferCtrl');
var PurchaseCtrl = require('./controllers/PurchaseCtrl');
var ShoppingCartCtrl = require('./controllers/ShoppingCartCtrl');
var NotificationCtrl = require('./controllers/NotificationCtrl');
var CustomerCtrl = require('./controllers/CustomerCtrl');
var GeolocationCtrl = require('./controllers/GeolocationCtrl');
var LoginCtrl = require('./controllers/LoginCtrl');

// models
var Geolocation = require('./models/Geolocation');
var User = require('./models/User');

exports.route = function (app) {
	Geolocation.setConnection(app.get('connection'));

	var staticPath = path.normalize(config.path.frontendBasePath);

	// Allow cross domain requests by AJAX (server is on other domain)
	app.use(allowCrossDomain);
	// set simple routing from express
	//app.use(app.router);
	// set static routing on mobile application frontend
	app.use(express.static(staticPath));

	// Worklight doesnt allow index.html as main fail
	app.get('/', function (req, res) {
		res.sendfile(path.normalize(staticPath + '/myStore.html'));
	});
	
	// @todo only for quick download app
	app.get('/app.apk', function (req, res) {
		res.sendfile(path.normalize(staticPath + '/../dist/app.apk'));
	});

	// Websocket support
	var server = http.createServer(app);
	var io = socketio(server);
	io.on('connection', function (socket) {
		// vytvoří socket pro každého uživatele a naslouchá
		socket.on('verificationHash', function (verificationHash, callback) {
			l.d('verificationHash');
			User.getByVerificationHash(verificationHash, function (e, user) {
				if (e || !user) {
					return callback(new Error('Logged out. Login again'));
				}
				var shoppingCartCtrl = ShoppingCartCtrl(socket);
				var notificationCtrl = NotificationCtrl(socket);
				var offerCtrl = OfferCtrl(socket);
				var customerCtrl = CustomerCtrl(socket);
				var purchaseCtrl = PurchaseCtrl(socket);
				var geolocationCtrl = GeolocationCtrl(socket, user);
				callback();
			});
		});
		var loginCtrl = LoginCtrl(socket);
		l.d('emit connection');
		socket.emit('connection', { status: 'connected' });
	});

	// nastaví server a socket.io do globálníh kontextu app
	app.server = server;
	app.io = io;
	// nahrazení původního listen za nový, který se má volat pro socket.io
	app.listen = function (port) {
		return app.server.listen.apply(app.server, arguments);
	};
};