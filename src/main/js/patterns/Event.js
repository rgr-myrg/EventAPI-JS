(function(BTG){
	BTG.Event = function(obj){
		var listeners = [];
		this.add = function(listener){
			if(typeof listener === 'function'){
				listeners.push(listener);
			}
		};
		this.remove = function(listener){
			if(typeof listener === 'function'){
				var size = listeners.length;
				for(var x=0; x < size; x++){
					if(listeners[x] === listener){
						listeners[x] = function(){return null;};
					}
				}
			}
		};
		this.dispatch = function(){
			var size = listeners.length;
			for(var x=0; x < size; x++){
				try{
					listeners[x].apply(this,arguments);
				}catch(e){
				}
			}
		};
	};
})(BTG);
