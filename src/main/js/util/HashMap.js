(function(BTG){
	BTG.HashMap = function(){
		var keys = {};
		return {
			put : function(id, data){
				keys[id] = data;
			},
			get : function(id){
				return keys[id];
			},
			clear : function(id){
				delete keys[id];
			},
			flush : function(){
				keys = {};
			},
			item : function(id, data){
				if(!keys[id]){
					keys[id] = data;
				}
				return keys[id];
			},
			getItems : function(){
				var temp = {};
				for(var i in keys){
					temp[i]=keys[i];
				}
				return temp;
			}
		};
	};
})(BTG);
