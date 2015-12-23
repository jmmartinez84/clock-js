define(function () {
    return ["$scope", function ($scope) {
        $scope.$on('clock.init',function(scope, newClock){
            if(!$scope.clocks){
                $scope.clocks = new Array();
            }
            $scope.clocks.push(newClock);

        })
        
    }];
});