define(function(){
	var ClockFactory = function(hand){
		var Clock = function(){
			//Fields
			this.$$secondsHand = new hand(6);
			this.$$minutesHand = new hand(6);
			this.$$hoursHand = new hand(30);
			this.$$animation = true;
		};
		//Properties
		Object.defineProperty(Clock.prototype, 'secondsHand',{
			get: function(){
				return this.$$secondsHand;		
			}			
		});
		Object.defineProperty(Clock.prototype, 'minutesHand',{
			get: function(){
				return this.$$minutesHand;		
			}			
		});
		Object.defineProperty(Clock.prototype, 'hoursHand',{
			get: function(){
				return this.$$hoursHand;		
			}			
		});
		Object.defineProperty(Clock.prototype, 'animation',{
			get: function(){
				return this.$$animation;
			},
			set:function(value){
				if(typeof(value) === "boolean"){
					this.$$animation = value;
				}
			}
		});
		return Clock;
	};
	
	return ["clockHandFactory", ClockFactory];
});