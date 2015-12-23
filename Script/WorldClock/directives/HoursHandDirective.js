jdefine(function () {
    var HoursHand = function () {
        // Return the directive configuration.
        return ({
            link: function (scope, element, attrs) {
            	if(scope.clock.hands.hoursHand){
            		scope.clock.hands.hoursHand.element = element[0];
            	}
            }
        });
    };
    return [HoursHand]
});