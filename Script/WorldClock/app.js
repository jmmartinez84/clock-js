(function () {
    define([
        'mainCtrl',
        'clockCtrl',
        'clockDir',
        'secHandDir',
        'minHandDir',
        'hoursHandDir',
        'clockServ'
    ], function (mainCtrl , clockCtrl, clockDirective, secondsDirective, minutesDirective, hoursDirective, clockService) {
        angular
         .module("worldClock", [])
         .controller("worldclock", mainCtrl)
         .controller("clock",clockCtrl)
         .directive("showClock", clockDirective)
         .directive("linkSeconds", secondsDirective)
         .directive("linkMinutes", minutesDirective)
         .directive("linkHours", hoursDirective)
         .factory("clockService",clockService)
    });

})();
