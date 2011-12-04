(function(BTG){
	BTG.SubscriberAPI = (function(){
		var	event = BTG.APIEvents;
		return {
			register : function(subscriber){
				if(typeof subscriber.onRegister === 'function'){
					try{
						var listeners = subscriber.onRegister();
						if(typeof listeners === 'object'){
							for(var i in listeners){
								if(listeners.hasOwnProperty(i) && typeof event[i] === 'object'){
									event[i].add(listeners[i],subscriber);
								}
							}
							subscriber.onRegister=function(){
								return null;
							};
						}
					}catch(e){
					}
				}
			}
		};
	}());
})(BTG);
