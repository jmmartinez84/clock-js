
define(['app'], function(App, $, _) {
    describe('ClockController', function() {
        // Initialization of the AngularJS application before each test case
        beforeEach(module('worldClock'));

        var $controller;

          beforeEach(inject(function(_$controller_){
            $controller = _$controller_;
          }));

        it('should have a "clock" object', function() {
            var $scope = {
                "$watch":function(){},
            };
            spyOn($scope, '$watch');
            var controller = $controller('clock', { $scope: $scope });
            expect($scope.clock).toEqual(jasmine.any(Object));
        });

    });
});
