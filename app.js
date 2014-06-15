// Dependencies
var mongoose = require('mongoose');
var Client = require('pg').Client;
var express = require('express');
var l = require('log-dispatch');

// Confiruration with local config
var config = require('./config/config');

// Local services
var router = require('./router');

// Create application server
var app = express();

// Starting server
var startServer = function () {
	// listen on port from config
	app.listen(config.server.port).on('error', function (e) {
		// if this method was already called (or port is not free)
		l.warning('Server already running on port '+config.server.port);
	}).on('listening', function () {
		// server started successfully
		l.info('Server is running on port '+config.server.port);
	});
};

// hard stoping server
var stopServer = function () {
	// it is not posible in express
	//app.close();
};

// Try to reconect to database on connection missed
var dbReconnect = function () {
	l.info('Database is reconnecting');
	return dbConnect();
};

// Connecting to database by config
var dbConnect = function () {
	mongoose.connect(config.db.url);
	return mongoose.connection;
};

// Delayed reconecting to database after missed connection
var delayedDbReconnect = function () {
	setTimeout(dbReconnect, 2000);
};

var postgresConnect = function () {
	var client = new Client(config.postgres);
	client.on('error', function (e) {
		l.error('Nepodařilo se připojit k databázi mysql', e);
	}).on('connect', function () {
		l.info('Postgres database was connected');
	});
	client.connect();
	client.query('SET search_path TO '+config.postgres.schema+';');
	return client;
};

// Start application by connect to database
var db = dbConnect();
var connection = postgresConnect();
app.set('connection', connection);

// Routing application
router.route(app);

// Events
// database connection cannot connect, try reconnect in timeout
db.on('error', function (e) {
	l.error('Failed to connect database');
	delayedDbReconnect();
});

// database connection opened, start server
db.on('open', function () {
	l.info('Database connection opened');
	startServer();
});

// database connection lost (was closed)
db.on('close', function () {
	l.error('Database connection closed');
	stopServer();
	dbReconnect();
});

// exporting application for other services
module.exports = app;

process.on('_uncaughtException', function(err) {
    // handle the error safely
    l.error(err);
});

startServer();