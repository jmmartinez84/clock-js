jdefine(function () {
    var ClockController = function ($scope, clockService) {
    	$scope.clock = {
            'hands':{
                'secondsHand':{
                    'value':0,
                    'offset':0,
                    'type':6,
                    'element':null
                },
                'minutesHand':{
                    'value':0,
                    'offset':0,
                    'type':6,
                    'element':null
                },
                'hoursHand':{
                    'value':0,
                    'offset':0,
                    'type':30,
                    'element':null
                }
            },
            'animation':true
    	}
        $scope.valuesWatch = $scope.$watch('clock', function() {
            var hands = $scope.clock.hands;
            if(hands.secondsHand.element && hands.minutesHand.element && hands.hoursHand.element){
                $scope.valuesWatch();
                clockService.Initialize($scope.clock);
                $scope.$emit('clock.init', $scope.clock);
            }
        });


    };
    return ["$scope", "clockService", ClockController];
});