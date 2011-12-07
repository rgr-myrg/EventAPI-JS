(function(BTG){
	BTG.Cache = function(){
		var	map   = {},
			add   = function(name){
				if(!map[name] && typeof name === 'string'){
					map[name] = new BTG.HashMap();
				}
				return map[name] || null;
			};
		return {
			set : function(name){
				return map[name] || add(name);
			}
		};
	};
})(BTG);
