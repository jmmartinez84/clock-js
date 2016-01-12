
define(['app'], function() {
    describe('ClockController', function() {
        // Initialization of the AngularJS application before each test case
        beforeEach(module('worldClock'));

        var $controller, $scope, $window;
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
                        this.animation = false;
                    };
                    return fakeClock;
                }]);
                $provide.service('$window',function(){
                });
            });
        });
        
        beforeEach(inject(function($rootScope, _$controller_, clockService, _$window_){
            $scope=$rootScope.$new();
            $controller = _$controller_;
            $window = _$window_;

        }));
        beforeEach(function() {
            var controller = $controller('clock', { $scope: $scope });
            spyOn($scope,'run');
        });
        it('should have a "clock" object', function() {
            expect($scope.clock).toEqual(jasmine.any(Object));
        });
        describe('Clock initialization', function() {           
            it('should exist an initClock function', function() {
                expect($scope.initClock).toBeDefined();
            });
            it('should emit to \'init\' to main controller', function() {
                var div = document.createElement('div');
                $scope.clock.secondsHand.element = div;
                $scope.clock.minutesHand.element = div;
                $scope.clock.hoursHand.element = div;
                $scope.initClock();
                expect($scope.run).toHaveBeenCalledWith($scope.clock);
            });
            
        });
        describe('Clock initialization without requestAnimationFrame', function() {
            beforeEach(function() {
                $window.requestAnimationFrame = function(){

                }
                spyOn($window,'requestAnimationFrame');
                $scope.clock.animation = true;        

            }); 
            it('should exist an initClock function', function() {
                expect($scope.initClock).toBeDefined();
            });
            it('should emit to \'init\' to main controller', function() {
                var div = document.createElement('div');
                $scope.clock.secondsHand.element = div;
                $scope.clock.minutesHand.element = div;
                $scope.clock.hoursHand.element = div;
                $scope.initClock();
                expect($scope.run).toHaveBeenCalledWith($scope.clock);
            });
            afterEach(function(){
                $scope.clock.animation = false;
            });
            
        });
    });
});
