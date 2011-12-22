(function(BTG){
	BTG.Object = {
		toQueryString : function(data){
			var	arr = [],
				str = '';
			for(var i in data){
				if(data.hasOwnProperty(i) && data[i]){
					arr.push(i + '=' + data[i]);
				}
			}
			if(arr.length>0){
				arr.sort();
				str = arr.join('&');
			}
			return str;
		}
	};
})(BTG);
