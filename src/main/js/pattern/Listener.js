(function(BTG){
	BTG.Listener = function(fn, ob){
		var callback = fn,
			parent   = ob;
		return {
			dispatch : function(){
				callback.apply(parent, arguments);
			},
			remove : function(){
				callback = function(){return false;};
			},
			getCallback : function(){
				return callback;
			}
		};
	};
})(BTG);
