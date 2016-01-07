requirejs({
    "baseUrl": "Script",
    "paths": {
        "mainCtrl":"WorldClock/controllers/MainController",
        "clockCtrl":"WorldClock/controllers/ClockController",
        "clockDir": "WorldClock/directives/ClockDirective",
        "linkHandDir":"WorldClock/directives/linkHandDirective",
        "clockHand":"WorldClock/factories/ClockHand",
        "clockServ":"WorldClock/services/ClockService",
        "app": "WorldClock/app"
    }

}, ["app"], function () {
        var containers = angular.element(".content");
        angular.forEach(containers, function (container, index) {
            angular.bootstrap(container, ["worldClock"]);
        });
    });