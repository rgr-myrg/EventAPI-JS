(function(BTG){
	BTG.HashMap = function(){
		var keys = {};
		return {
			item : function(id, data){
				if(!keys[id] && typeof id === 'string'){
					keys[id] = data;
				}
				return keys[id];
			},
			clear : function(id){
				delete keys[id];
			},
			flush : function(){
				keys = {};
			},
			getItems : function(){
				var temp = {};
				for(var i in keys){
					temp[i]=keys[i];
				}
				return temp;
			},
			put : this.item,
			get : function(id){
				return keys[id];
			}
		};
	};
})(BTG);
