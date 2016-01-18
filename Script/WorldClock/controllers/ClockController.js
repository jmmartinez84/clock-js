define(function () {
    var ClockController = function ($scope, $window, $timeout, clockFactory, clockService) {
        $scope.run = function(clock){
            if(clock.animation){
                clockInterval = $window.requestAnimationFrame(function(){
                    clockService.loop(clock);
                    $scope.run(clock);
                });
            }else{
                $timeout(function(){
                    clockService.loop(clock);
                    $scope.run(clock);
                },500);
            }
        };
        $scope.initClock = function() {
            var clock = $scope.clock;
            if(clock.secondsHand.element && clock.minutesHand.element && clock.hoursHand.element){
                if(angular.isFunction($scope.valuesWatch)){
                    $scope.valuesWatch();
                }
                if($window.requestAnimationFrame){
                    $scope.clock.animation = clock.animation && true;
                }else{
                    $scope.clock.animation = clock.animation &&false;
                }
                $scope.run($scope.clock);
                $scope.$emit('clock.init', $scope.clock);
            }
        };
        $scope.clock = new clockFactory();
        $scope.valuesWatch = $scope.$watch('clock', $scope.initClock);


    };
    return ["$scope","$window", "$timeout", "clockFactory", "clockService", ClockController];
});