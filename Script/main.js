requirejs({
    "baseUrl": "Script",
    "paths": {
        "mainCtrl":"WorldClock/controllers/MainController",
        "clockCtrl":"WorldClock/controllers/ClockController",
        "clockDir": "WorldClock/directives/ClockDirective",
        "linkHandDir":"WorldClock/directives/linkHandDirective",
        "clockHand":"WorldClock/factories/ClockHand",
        "clockFactory":"WorldClock/factories/Clock",
        "clockService":"WorldClock/services/ClockService",
        "app": "WorldClock/app"
    }

}, ["app"], function () {
        var containers = document.getElementsByClassName("content");
        angular.forEach(containers, function (container, index) {
            angular.bootstrap(container, ["worldClock"]);
        });
    });