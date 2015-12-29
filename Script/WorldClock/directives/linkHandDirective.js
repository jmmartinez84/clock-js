define(function () {
    var ClockHand = function () {
        // Return the directive configuration.
        return ({
            link: function (scope, element, attrs) {
            	if(scope.clock.hands[attrs.linkHand]){
            		scope.clock.hands[attrs.linkHand].element = element[0];
            	}
            }
        });
    };
    return [ClockHand]
});