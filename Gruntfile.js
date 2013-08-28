module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %>, version: <%= pkg.version %>, <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        //compress: false,
        //beautify: true,
        mangle: false
      },
      bower_components: {
        files: {
          'build/bower_components.js': [
            "bower_components/jquery/jquery.min.js",
            "bower_components/bootstrap/docs/assets/js/bootstrap.min.js",
            "bower_components/bootstrap.pull-down/build/js/bootstrap.pull-down.js",
            "bower_components/angular-1.1.6/build/angular.min.js",
            "bower_components/momentjs/min/moment.min.js",
            "bower_components/underscore/underscore-min.js",
            "bower_components/socket.io-client/dist/socket.io.min.js",
            "bower_components/mootools/Source/Core/Core.js",
            "bower_components/eventEmitter/EventEmitter.min.js",
            "bower_components/crypto-js/build/rollups/md5.js"
          ]
        }
      },
      controllers: {
        files: {
          'build/controllers.js': [
            "js/controllers/AppCtrl.js",
            "js/controllers/HomeCtrl.js",
            "js/controllers/MenuCtrl.js",
            "js/controllers/OfferListCtrl.js",
            "js/controllers/PurchaseListCtrl.js",
            "js/controllers/OfferCtrl.js",
            "js/controllers/MessagesCtrl.js",
            "js/controllers/PurchaseCtrl.js",
            "js/controllers/ProductCtrl.js",
            "js/controllers/ShoppingCartListCtrl.js",
            "js/controllers/LoginCtrl.js",
            "js/controllers/LogoutCtrl.js",
            "js/controllers/NavCtrl.js",
            "js/controllers/EditShoppingCartCtrl.js",
            "js/controllers/ShoppingCartCtrl.js",
            "js/controllers/ExitCtrl.js"
          ]
        }
      },
      configs: {
        files: {
          'build/configs.js': [
            "js/config/initOptions.js",
            "js/config/config.local.js"
          ]
        }
      },
      models: {
        files: {
          'build/models.js': [
            "js/models/OfferModel.js",
            "js/models/PurchaseModel.js",
            "js/models/ProductModel.js",
            "js/models/ShoppingCartModel.js",
            "js/models/UserModel.js",
            "js/models/LoyaltyModel.js",
            "js/models/NotificationModel.js",
            // model entities
            "js/models/entities/ShoppingCart.js"
          ]
        }
      },
      services: {
        files: {
          'build/services.js': [
            "js/services/MemoryCache.js",
            "js/services/LoadingDisp.js",
            "js/services/MessageDisp.js",
            "js/services/Translator.js",
            "js/services/OfflineStorage.js",
            "js/services/AuthDisp.js",
            "js/services/config.js",
            "js/services/Native.js"
          ]
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};