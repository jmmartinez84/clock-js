module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'Script/**/*.js','Test/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: "Script/",
          name: "main",
          out: "built/<%= pkg.name %>.min.js",
           paths: {
              "angular":"empty:",
              "mainCtrl":"WorldClock/controllers/MainController",
              "clockCtrl":"WorldClock/controllers/ClockController",
              "clockDir": "WorldClock/directives/ClockDirective",
              "linkHandDir":"WorldClock/directives/linkHandDirective",
              "clockHand":"WorldClock/factories/ClockHand",
              "clockFactory":"WorldClock/factories/Clock",
              "clockService":"WorldClock/services/ClockService",
              "app": "WorldClock/app"
          }
      }
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    }
  });
  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Load the plugin that provides the "karma" task.
  grunt.loadNpmTasks('grunt-karma');
  // Load the plugin that provides the "requirejs" task.
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default task(s).
  grunt.registerTask('default', ['jshint','karma','requirejs']);

};