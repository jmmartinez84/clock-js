requirejs({
    "baseUrl": "Script",
    "paths": {
        "mainCtrl":"WorldClock/controllers/MainController",
        "clockCtrl":"WorldClock/controllers/ClockController",
        "clockDir": "WorldClock/directives/ClockDirective",
        "secHandDir":"WorldClock/directives/SecondsHandDirective",
        "minHandDir":"WorldClock/directives/MinutesHandDirective",
        "hoursHandDir":"WorldClock/directives/HoursHandDirective",
        "clockServ":"WorldClock/services/ClockService",
        "app": "WorldClock/app"
    }

}, ["app"], function () {
        var containers = angular.element(".content");
        angular.forEach(containers, function (container, index) {
            angular.bootstrap(container, ["worldClock"]);
        });
    });