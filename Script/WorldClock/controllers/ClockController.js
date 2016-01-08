define(function () {
    var ClockController = function ($scope, clockFactory, clockService) {
        $scope.initClock = function() {
            var clock = $scope.clock;
            if(clock.secondsHand.element && clock.minutesHand.element && clock.hoursHand.element){
                if(angular.isFunction($scope.valuesWatch)){
                    $scope.valuesWatch();
                }
                clockService.Initialize($scope.clock);
                $scope.$emit('clock.init', $scope.clock);
            }
        };
        $scope.clock = new clockFactory();
        $scope.valuesWatch = $scope.$watch('clock', $scope.initClock);


    };
    return ["$scope", "clockFactory", "clockService", ClockController];
});