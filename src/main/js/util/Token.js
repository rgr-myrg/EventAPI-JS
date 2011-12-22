(function(BTG){
	BTG.Token = {
		replace : function(str, data){
			var	tokens = str.match(/{\w+}/g),
				size   = (tokens ? tokens.length : 0);
			for(var x=0; x<size; x++){
				var	token = tokens[x],
					key   = token.replace(/{|}/g,""),
					val   = key==='ord' ? BTG.Number.random(999999) : data[key];
					if(val){
						str = str.replace(token, val);
					}
				}
				return str;
			}
	};
})(BTG);
