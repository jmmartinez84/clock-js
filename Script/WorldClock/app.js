(function () {
    define([
        'mainCtrl',
        'clockCtrl',
        'clockDir',
        'clockHand',
        'clockFactory',
        'linkHandDir',
        'clockServ'
    ], function (mainCtrl , clockCtrl, clockDirective, clockHandFactory, clockFactory, linkHandDir, clockService) {
        angular
         .module("worldClock", [])
         .controller("worldclock", mainCtrl)
         .controller("clock",clockCtrl)
         .directive("showClock", clockDirective)
         .directive("linkHand", linkHandDir)
         .factory("clockHandFactory", clockHandFactory)
         .factory("clockFactory", clockFactory)
         .service("clockService",clockService);
    });

})();
