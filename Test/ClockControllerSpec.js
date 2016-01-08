
define(['app'], function() {
    describe('ClockController', function() {
        // Initialization of the AngularJS application before each test case
        beforeEach(module('worldClock'));

        var $controller,$scope;
        beforeEach(function() {
            module(function($provide){
              $provide.factory('clockFactory', [function(){
                var fakeClock = function(){
                    this.secondsHand={
                        "element":"secondsHandElement"
                    };
                    this.minutesHand={
                        "element":"minutesHandElement"
                    };
                    this.hoursHand={
                        "element":"hoursHandElement"
                    };
                };
                return fakeClock;
              }]);
            });
        });
        
        beforeEach(inject(function($rootScope, _$controller_, clockService){
            $scope=$rootScope.$new();
            $controller = _$controller_;
            spyOn(clockService,'Initialize');

        }));
        beforeEach(function() {
            var controller = $controller('clock', { $scope: $scope });
        });
        it('should have a "clock" object', function() {
            expect($scope.clock).toEqual(jasmine.any(Object));
        });
        describe('Clock initialization', function() {
            it('should exist an initClock function', function() {
                expect($scope.initClock).toBeDefined();
            });
            it('should emit to \'init\' to main controller', function() {
                spyOn($scope,'$emit');
                var div = document.createElement('div');
                $scope.clock.secondsHand.element = div;
                $scope.clock.minutesHand.element = div;
                $scope.clock.hoursHand.element = div;
                $scope.initClock();
                expect($scope.$emit).toHaveBeenCalledWith('clock.init',$scope.clock);
            });
        });
    });
});
