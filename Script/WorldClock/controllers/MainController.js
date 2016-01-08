define(function () {
    return ["$scope", function ($scope) {
    	$scope.init = function(scope, newClock){
            if(!$scope.clocks){
                $scope.clocks = new Array();
            }
            $scope.clocks.push(newClock);
        }
        $scope.$on('clock.init',$scope.init)
        
    }];
});