define(['app'], function() {
    describe('MainController', function() {
        // Initialization of the AngularJS application before each test case
        beforeEach(module('worldClock'));

        var $controller,$scope;

        beforeEach(inject(function($rootScope, _$controller_){
            $scope=$rootScope.$new();
            $controller = _$controller_;
        }));
        beforeEach(function() {
            var controller = $controller('worldclock', { $scope: $scope });
        });
        it('should exist an init function', function() {
            expect($scope.init).toBeDefined();
        });
        it('should exist an init function', function() {
            expect($scope.init).toBeDefined();
        });
        it('should add a new clock to clocks array', function() {
            var fakeClock = {};
            $scope.init($scope, fakeClock);
            expect($scope.clocks.length).toBeGreaterThan(0);
        });
    });
});