define(function () {
    var ClockHand = function () {
        // Return the directive configuration.
        return ({
            link: function (scope, element, attrs) {
            	if(scope.clock[attrs.linkHand]){
            		scope.clock[attrs.linkHand].element = element[0];
            	}
            }
        });
    };
    return [ClockHand]
});