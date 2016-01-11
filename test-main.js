var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
    allTestFiles.push(normalizedTestModule);
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  "paths": {
        "angular": "bower_components/angular/angular",
        "angular.mocks":"bower_components/angular-mocks/angular-mocks",
        "mainCtrl":"Script/WorldClock/controllers/MainController",
        "clockCtrl":"Script/WorldClock/controllers/ClockController",
        "clockDir": "Script/WorldClock/directives/ClockDirective",
        "linkHandDir":"Script/WorldClock/directives/linkHandDirective",
        "clockHand":"Script/WorldClock/factories/ClockHand",
        "clockFactory":"Script/WorldClock/factories/Clock",
        "clockService":"Script/WorldClock/services/ClockService",
        "app": "Script/WorldClock/app"
    },
    "shim": {
        "angular": {
            "exports": "angular"
        },
        "angular.mocks":{
            "deps":["angular"],
            "expots":"angular.mocks"
        },
        "app": {
            "exports": "app",
            "deps":["angular.mocks"],
        }
    },
  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
