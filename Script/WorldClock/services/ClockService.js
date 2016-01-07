define(function () {
	var ClockService = function($window, $timeout){
		var update = function(clock){
			var secondsHand = clock.secondsHand;
			var minutesHand = clock.minutesHand;
			var hoursHand = clock.hoursHand;
	        var actDate = new Date();
	        /*Offset*/
	        actDate.setSeconds(actDate.getSeconds()+secondsHand.offset);
	        actDate.setMinutes(actDate.getMinutes()+minutesHand.offset);
	        actDate.setHours(actDate.getHours()+hoursHand.offset);
	        /*offset*/
	        if(clock.animation){
	        	secondsHand.value = actDate.getSeconds()+actDate.getMilliseconds()/1000;
	        }else{
	        	secondsHand.value = actDate.getSeconds();
	        }
	        minutesHand.value = actDate.getMinutes()+secondsHand.value/60;
	        hoursHand.value = actDate.getHours()+minutesHand.value/60;
	        if(window.requestAnimationFrame){
	        	clockInterval = window.requestAnimationFrame(function(){
	        		loop(clock);
	        	});
	        }else{
	        	window.setTimeout(function(){
	        		loop(clock);
	        	},500);
	        }
	    };
	    var draw = function(clock){
	    	var secondsHand = clock.secondsHand;
			var minutesHand = clock.minutesHand;
			var hoursHand = clock.hoursHand;
	    	/*segundero*/
	    	drawElement(secondsHand);
	    	/*minutero*/
	    	drawElement(minutesHand);
	    	/*horario */
	    	drawElement(hoursHand);


	    };
	    var drawElement = function(hand){
	    	var currentDeg = hand.value * hand.type;
	    	if(typeof(hand.element.style.transform)!="undefined"){
	    		hand.element.style.transform = "rotate("+currentDeg+"deg)";
	    	}else if(typeof(hand.element.style.webkitTransform)!="undefined"){
	    		hand.element.style.webkitTransform = "rotate("+currentDeg+"deg)";
	    	}else if(typeof(hand.element.style.msTransform)!="undefined"){
	    		hand.element.style.msTransform = "rotate("+currentDeg+"deg)";
	    	}
	    	else if(typeof(hand.element.style.MozTransform)!="undefined"){
	    		hand.element.style.MozTransform = "rotate("+currentDeg+"deg)";
	    	}
	    };
		var loop = function(clock){
			update(clock);
			draw(clock);
		};
		var initialize = function(clock){
			if($window.requestAnimationFrame){
				clock.animation = clock.animation && true;
				clockInterval = $window.requestAnimationFrame(function(){
					loop(clock);
				});
			}else{
				clock.animation = clock.animation && false;
				$timeout(function(){
					loop(clock);
				},500);
			}
		};
		return{
			Initialize:initialize
		};
	};
    return ['$window','$timeout', ClockService];
});