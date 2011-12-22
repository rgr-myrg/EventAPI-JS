(function(BTG){
	BTG.Timer = function(options){
		var	milliseconds = !isNaN(options.milliseconds) ? options.milliseconds : 100,
			isRunning    = false,
			intervalId   = null,
			listeners    = [],
			id           = options.timerId,
			parent       = options.parent,
			timeCounter  = 0;
		var notifyListeners = function(){
			var size = listeners.length;
			for(var x = 0; x < size; x++){
				var item = listeners[x];
				item.listener.apply(item.scope, arguments);
			}
		};
		return {
			currentCount : function(){
				return timeCounter;
			},
			start : function(){
				if(!isRunning){
					isRunning  = true;
					intervalId = setInterval(parent[id].count, milliseconds);
				}
			},
			count : function(){
				timeCounter = timeCounter + milliseconds;
				notifyListeners();
			},
			stop : function(){
				clearInterval(intervalId);
				isRunning = false;
			},
			reset : function(){
				this.stop();
				timeCounter=0;
				this.start();
			},
			addListener : function(func, scope){
				if(typeof func === 'function'){
					listeners.push({
						listener : func,
						scope    : scope
					});
				}
			},
			removeListener : function(listener){
				var size = listeners.length;
				for(var x=0; x<size; x++){
					if(listeners[x] === listener){
						listeners[x] = function(){};
					}
				}
			}
		};
	};
})(BTG);
