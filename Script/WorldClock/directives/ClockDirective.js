define(function () {
    var Clock = function () {
        // Return the directive configuration.
        return ({
            template:'<div data-ng-controller="clock" class="clock">'+
            			'<div class="segundero" link-hand="secondsHand"></div>'+
            			'<div class="minutero" link-hand="minutesHand"></div>'+
            			'<div class="horario" link-hand="hoursHand"></div>'+
            			'<div class="center1">'+
            				'<div class="center2"></div>'+
            			'</div>'+
            		 '</div>'
        });
    };
    return [Clock]
});