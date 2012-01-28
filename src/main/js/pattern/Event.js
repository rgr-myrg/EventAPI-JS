(function(BTG){
	BTG.Event = function(obj){
		var listeners = [];
		return {
			add : function(fn, ob){
				if(typeof fn === 'function'){
					listeners.push(new BTG.Listener(fn, ob));
				}
			},
			remove : function(listener){
				var size = listeners.length;
				for(var x=0; x < size; x++){
					try{
						var listener = listeners[x];
						if(listener.getCallback() === listener){
							listener.remove();
						}
					}catch(e){
					}
				}
			},
			dispatch : function(){
				var size = listeners.length;
				for(var x=0; x < size; x++){
					try{
						var item = listeners[x];
						item.dispatch(arguments);
					}catch(e){
					}
				}
			}
		};
	};
})(BTG);
