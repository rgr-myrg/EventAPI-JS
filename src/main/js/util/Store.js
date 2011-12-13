(function(BTG){
	BTG.CacheStore = new BTG.Cache();
	BTG.Store = function(name){
		return BTG.CacheStore.set(name);
	};
})(BTG);
//BTG.Store('comscore').item('id',123123);//setter
//BTG.Store('comscore').item('id');//getter
//BTG.Store('comscore').clear('id');
//BTG.Store('comscore').flush();
