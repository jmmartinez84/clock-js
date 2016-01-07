
define(['app'], function() {
    describe('ClockController', function() {
        // Initialization of the AngularJS application before each test case
        beforeEach(module('worldClock'));

        var $controller,$scope;

        beforeEach(inject(function($rootScope, _$controller_){
            $scope=$rootScope.$new();
            $controller = _$controller_;
        }));

        it('should have a "clock" object', function() {
            var controller = $controller('clock', { $scope: $scope });
            expect($scope.clock).toEqual(jasmine.any(Object));
        });
    });
});
