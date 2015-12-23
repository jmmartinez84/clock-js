jdefine(function () {
    var MinutesHand = function () {
        // Return the directive configuration.
        return ({
            link: function (scope, element, attrs) {
            	if(scope.clock.hands.minutesHand){
            		scope.clock.hands.minutesHand.element = element[0];
            	}
            }
        });
    };
    return [MinutesHand]
});