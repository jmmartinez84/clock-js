define(function(){
	var ClockHandFactory = function(){
		var ClockHand = function(type){
			//Fields
			this.$$value = 0;
			this.$$offset = 0;
			this.$$type = 6;
			this.$$element = null;
			if(type == 6 || type == 30){
				this.$$type = type;
			}

		};
		//Properties
		Object.defineProperty(ClockHand.prototype, 'value',{
			get: function(){
				return this.$$value;		
			},
			set: function(value){
				//It's a number
				if(angular.isNumber(value)){
					//It's between 0-12 or It's between 0-60
					if(value >= 0){
						//It's between 0-12 or It's between 0-60
						this.$$value = value %  (360 / this.$$type);
						
					}
				}
			}
			
		});
		Object.defineProperty(ClockHand.prototype, 'offset',{
			get:function(){
				return this.$$offset;
			},
			set:function(offset){
				//It's a number
				if(angular.isNumber(offset)){
					//It's integer
					if(isInt(offset)){
						//It's between 0-12 or It's between 0-60
						this.$$offset = offset %  (360 / this.$$type);
						
					}
				}
			}
		});
		Object.defineProperty(ClockHand.prototype, 'type',{
			get: function(){
				return this.$$type;		
			},
			set:function(type){
				if(type === 30 || type === 6){
					this.$$type=type;
				}
			}
		});
		Object.defineProperty(ClockHand.prototype, 'element',{
			get: function(){
				return this.$$element;
			},
			set:function(element){
				if(element instanceof HTMLDivElement){
					this.$$element = element;
				}
			}
		});
		function isInt(n) {
	 	  return n % 1 === 0;
		}
		return ClockHand;
	};
	
	return [ClockHandFactory];
});