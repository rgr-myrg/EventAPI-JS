(function(BTG){
	BTG.Beacon = {
		send : function(options){
			if(options.url){
				var	src = '',
					qs  = '',
					fn  = typeof options.onload === 'function' ? options.onload : function(e){};
				if(typeof options.data === 'object'){
					qs = BTG.Object.toQueryString(options.data);
				}else if (typeof options.data === 'string'){
					qs = options.data;
				}
				src = options.url + '?' + qs;
				try{
					var image = new Image(0,0);
					image.src = src;
					image.onload = image.onabort = image.onerror = function(e){
						fn({
							src   : src,
							data  : options.data,
							qs    : qs,
							event : e
						});
					};
				}catch(e){
				}
			}
		}
	};
})(BTG);
