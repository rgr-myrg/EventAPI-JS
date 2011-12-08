(function(BTG){
	BTG.Comscore = function(){
		var	constant = BTG.ComscoreVars,
			config   = null,
			getData  = function(metadata){
			console.log("Comscore.getData metadata:", metadata);
				var	data  = {},
					cache = BTG.Store('Comscore');
				if(!cache.item(metadata.id)){
					data = {
						C1 : constant.BEACON_TYPEID,
						C2 : config.comScorePrimaryID, //PRIMARYID
						C3 : metadata.mtvnOwner, //CONTENTOWNER
						C4 : "", //LOCATION
						C5 : constant.VIDEOAD_GENREID, //GENRE
						C6 : "", //SHOW_LEVEL
						C7 : "", //URL_KEY
						C8 : metadata.title, //VIDEOTITLE
						C9 : config.referrer ? config.referrer:"NO_REF" //REFERRER
					};
					cache.item(metadata.id, data);
				}else{
					console.log("Comscore.getData fetching cached item");
					data = cache.item(metadata.id);
				}
				console.log("Comscore.getData", data);
				return data;
			};
		return {
			onRegister: function(){
				console.log("Comscore.onRegister");
				return {
					ON_CONFIG   : this.onConfig,
					ON_PLAY     : this.onPlay
				};
			},
			onConfig : function(data){
				console.log("Comscore.onConfig data:",data);
				config = data;
			},
			onPlay : function(metadata){
				console.log("Comscore.onPlay", metadata);
				BTG.Beacon.send({
					url    : constant.BEACON_URL,
					data   : getData(metadata),
					onload : onBeaconLoaded
				});
			}
		};
	};
})(BTG);
