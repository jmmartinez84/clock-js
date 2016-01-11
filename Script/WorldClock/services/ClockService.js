define(function () {
	var ClockService = function($window, $timeout){
		this.drawElement = function(hand){
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
	    	}else{
	    		throw  new Error("clock-js requires CSS transformation");
	    	}
		 };
		
		this.draw = function(clock){
	    	var secondsHand = clock.secondsHand;
			var minutesHand = clock.minutesHand;
			var hoursHand = clock.hoursHand;
	    	/*segundero*/
	    	this.drawElement(secondsHand);
	    	/*minutero*/
	    	this.drawElement(minutesHand);
	    	/*horario */
	    	this.drawElement(hoursHand);
	    };
		this.update = function(clock){
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
	    };
		this.loop = function(clock){
			this.update(clock);
			this.draw(clock);
		};
	};
    return ['$window','$timeout', ClockService];
});