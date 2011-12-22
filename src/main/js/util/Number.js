(function(BTG){
	BTG.Number = (function(){
		var picked = 0;
		return {
			random : function(range){
				var x  = Math.floor(Math.random() * Math.pow(10, ("" + range).length)) % range;
				picked = picked !== x ? x : this.random(range);
				return picked;
			}
		};
	}());
})(BTG);
