define(function () {
    var SecondsHand = function () {
        // Return the directive configuration.
        return ({
            link: function (scope, element, attrs) {
            	if(scope.clock.hands.secondsHand){
            		scope.clock.hands.secondsHand.element = element[0];
            	}
            }
        });
    };
    return [SecondsHand]
});