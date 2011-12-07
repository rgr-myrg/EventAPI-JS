(function(BTG){
	BTG.Event = function(obj){
		var listeners = [];
		this.add = function(listener, scope){
			if(typeof listener === 'function'){
				listeners.push({
					listener : listener,
					scope    : scope
				});
			}
		};
		this.remove = function(listener){
			var size = listeners.length;
			for(var x=0; x < size; x++){
				try{
					var item = listeners[x];
					if(item.listener === listener){
						item.listener = function(){return null;};
					}
				}catch(e){
				}
			}
		};
		this.dispatch = function(){
			var size = listeners.length;
			for(var x=0; x < size; x++){
				try{
					var item = listeners[x];
					item.listener.apply(item.scope, arguments);
				}catch(e){
				}
			}
		};
	};
})(BTG);
