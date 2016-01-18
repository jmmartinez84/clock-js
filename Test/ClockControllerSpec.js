
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
    describe('Clock run method requestAnimationFrame', function() {
         beforeEach(module('worldClock'));
        var $controller, $scope, $window, clockService;
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
                    this.called = false;
                    this.requestAnimationFrame = function(fn){
                        if(!this.called){
                            this.called = true;
                            fn();
                        }
                    }
                });
                $provide.service('clockService',function(){
                    this.loop = function(){
                        
                    }
                });
            });
        });
        beforeEach(inject(function($rootScope, _$controller_, _clockService_, _$window_){
            $scope=$rootScope.$new();
            $controller = _$controller_;
            clockService = _clockService_;
        }));
        beforeEach(function() {
            var controller = $controller('clock', { $scope: $scope });
            spyOn($scope,'$watch');
            spyOn(clockService, 'loop');
        });
        it('should start clock movement', function() {
            var fakeClock = {
                "animation":true
            };
            $scope.run(fakeClock);
            expect(clockService.loop).toHaveBeenCalledWith(fakeClock);
        });
        
    });
    describe('Clock run method $timeout', function() {
         beforeEach(module('worldClock'));
        var $controller, $scope, $timeout, clockService, $window;
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
                $provide.service('clockService',function(){
                    this.loop = function(){
                        
                    }
                });
            });
        });
        beforeEach(inject(function($rootScope, _$controller_, _clockService_, _$timeout_,_$window_){
            $scope=$rootScope.$new();
            $controller = _$controller_;
            clockService = _clockService_;
            $timeout = _$timeout_;
            $window = _$window_;
        }));
        beforeEach(function() {
            var controller = $controller('clock', { $scope: $scope });

            spyOn($scope,'$watch');
            spyOn(clockService, 'loop');
        });
        it('should start clock movement', function() {
            var fakeClock = {
                "animation":false
            };
            $scope.run(fakeClock);
            spyOn($scope,'run');
             // flush timeout(s) for all code under test.
            $timeout.flush();

            // this will throw an exception if there are any pending timeouts.
            $timeout.verifyNoPendingTasks();
            expect($scope.run).toHaveBeenCalledWith(fakeClock);
        });
        
    });
});
