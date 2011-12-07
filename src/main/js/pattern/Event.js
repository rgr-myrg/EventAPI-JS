(function(BTG){
	BTG.Event = function(obj){
		var listeners = [];
		return {
			add : function(listener, scope){
				if(typeof listener === 'function'){
					listeners.push({
						listener : listener,
						scope    : scope
					});
				}
			},
			remove : function(listener){
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
			},
			dispatch : function(){
				var size = listeners.length;
				for(var x=0; x < size; x++){
					try{
						var item = listeners[x];
						item.listener.apply(item.scope, arguments);
					}catch(e){
					}
				}
			}
		};
	};
})(BTG);
