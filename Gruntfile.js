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
        options: {},
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
            "js/controllers/*.js"
          ]
        }
      },
      configs: {
        options: {},
        files: {
          'build/configs.js': [
            "js/config/*.js",
            "js/myStore.js"
          ]
        }
      },
      models: {
        files: {
          'build/models.js': [
            "js/models/*.js",
            // model entities
            "js/models/entities/*.js"
          ]
        }
      },
      services: {
        files: {
          'build/services.js': [
            "js/services/*.js"
          ]
        }
      }
    },
    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %>, version: <%= pkg.version %>, <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      myStore: {
        files: {
          'build/myStore.css': [
            'css/*.css'
          ]
        }
      },
      bower_components: {
        files: {
          'build/bower_components.css': [
            "bower_components/bootstrap/docs/assets/css/bootstrap.css",
            "bower_components/bootstrap.icon/build/css/bootstrap.icon.css",
            "bower_components/bootstrap.icon/build/css/android-iconography-medium.css",
            "bower_components/bootstrap.icon/build/css/android-iconography-large.css",
            "bower_components/bootstrap.pull-down/build/css/bootstrap.pull-down.css"
          ]
        }
      }
    },
    copy: {
      bower_components_img: {
        files: [{
            expand: true,
            dest: 'img',
            flatten: true,
            src: [
              "bower_components/bootstrap/docs/assets/img/*",
              "bower_components/bootstrap.icon/build/img/*",
              "bower_components/bootstrap.icon/build/img/*",
              "bower_components/bootstrap.icon/build/img/*",
              "bower_components/bootstrap.pull-down/build/img/*"
            ]
        }]
      },
      fonts: {
        files: [{
            expand: true,
            dest: 'build',
            cwd: 'css',
            src: 'fonts/*'
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task and other.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', [
    'uglify', 
    'cssmin', 
    'copy'
  ]);

};