(function () {
    define([
        'mainCtrl',
        'clockCtrl',
        'clockDir',
        'linkHandDir',
        'clockServ'
    ], function (mainCtrl , clockCtrl, clockDirective, linkHandDir, clockService) {
        angular
         .module("worldClock", [])
         .controller("worldclock", mainCtrl)
         .controller("clock",clockCtrl)
         .directive("showClock", clockDirective)
         .directive("linkHand", linkHandDir)
         .factory("clockService",clockService);
    });

})();
