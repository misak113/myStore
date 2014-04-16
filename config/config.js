
// Libraries
var _ = require('underscore');
var l = require('log-dispatch');

// Local config
var configLocal = require('./config.local');

// Deafault config
var config = {
	db: {
		url: 'mongodb://localhost:27017/myretail'
	},
	server: {
		host: 'localhost',
		port: 80
	},
	path: {
		frontendBasePath: __dirname+'/../../../apps/myStore/common/'
	},
	debug: {
		logLevel: 2
	}
};

// AppFog envirnoment
var envConfig = {};
if (typeof process.env.VCAP_SERVICES !== 'undefined') {
	var env = JSON.parse(process.env.VCAP_SERVICES);
	envConfig = {
		db: env['mongodb-1.8'][0]['credentials'],
		server: {
			port: process.env.VCAP_APP_PORT
		}
	};
	l.log('loaded AppFog VCAP environment', envConfig);
}
// node environment
if (typeof process.env.NODE_CONFIG !== 'undefined') {
	envConfig = JSON.parse(process.env.NODE_CONFIG);
	l.log('loaded NODE_CONFIG', envConfig);
} 
config = _.extend(config, configLocal, envConfig);
if (typeof process.env.NODE_MONGODB_URL !== 'undefined') {
	config.db.url = process.env.NODE_MONGODB_URL;
	l.log('loaded NODE_MONGODB_URL', config.db.url);
}
if (typeof process.env.NODE_PORT !== 'undefined') {
	config.server.port = parseInt(process.env.NODE_PORT);
	l.log('loaded NODE_PORT', config.server.port);
}
if (typeof process.env.PORT !== 'undefined') {
	config.server.port = parseInt(process.env.PORT);
	l.log('loaded PORT', config.server.port);
}

module.exports = config;
