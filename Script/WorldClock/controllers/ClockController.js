define(function () {
    var ClockController = function ($scope, clockHandFactory, clockService) {
        var secondsHand = new clockHandFactory(6);
        var minutesHand = new clockHandFactory(6);
        var hoursHand = new clockHandFactory(30);
        hoursHand.offset = -2;
        $scope.clock = {
            'hands':{
                'secondsHand':secondsHand,
                'minutesHand':minutesHand,
                'hoursHand':hoursHand
            },
            'animation':true
        };
        $scope.valuesWatch = $scope.$watch('clock', function() {
            var hands = $scope.clock.hands;
            if(hands.secondsHand.element && hands.minutesHand.element && hands.hoursHand.element){
                $scope.valuesWatch();
                clockService.Initialize($scope.clock);
                $scope.$emit('clock.init', $scope.clock);
            }
        });


    };
    return ["$scope", "clockHandFactory", "clockService", ClockController];
});