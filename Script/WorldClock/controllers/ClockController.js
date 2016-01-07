define(function () {
    var ClockController = function ($scope, clockFactory, clockService) {
        $scope.clock = new clockFactory();
        $scope.valuesWatch = $scope.$watch('clock', function() {
            var clock = $scope.clock;
            if(clock.secondsHand.element && clock.minutesHand.element && clock.hoursHand.element){
                $scope.valuesWatch();
                clockService.Initialize($scope.clock);
                $scope.$emit('clock.init', $scope.clock);
            }
        });


    };
    return ["$scope", "clockFactory", "clockService", ClockController];
});