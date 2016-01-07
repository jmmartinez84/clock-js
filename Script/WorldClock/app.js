(function () {
    define([
        'mainCtrl',
        'clockCtrl',
        'clockDir',
        'clockHand',
        'linkHandDir',
        'clockServ'
    ], function (mainCtrl , clockCtrl, clockDirective, clockHandFactory, linkHandDir, clockService) {
        angular
         .module("worldClock", [])
         .controller("worldclock", mainCtrl)
         .controller("clock",clockCtrl)
         .directive("showClock", clockDirective)
         .directive("linkHand", linkHandDir)
         .factory("clockHandFactory", clockHandFactory)
         .service("clockService",clockService);
    });

})();
