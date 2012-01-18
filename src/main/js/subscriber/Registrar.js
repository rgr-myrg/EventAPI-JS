(function(BTG){
	BTG.Registrar = (function(){
		var	api = BTG.SubscriberAPI;
		return {
			onRegister : function(){
				console.log('>Registrar.onRegister');
				return {
					ON_CONFIG   : this.onConfig,
					ON_METADATA : this.onMetadata
				};
			},
			onConfig : function(config){
				var	evt = BTG.APIEvents.ON_CONFIG;
				if(config.omnitureEnabled){
					api.register(new BTG.AppMeasure);
				}
				if(config.comScoreEnabled){
					api.register(new BTG.Comscore);
				}

				evt.remove(this.onConfig);
				evt.dispatch(config);

				this.onConfig = function(){
					return null;
				};
			},
			onMetadata : function(metadata){
				if(metadata.beacons && metadata.beacons.length > 0){
					var evt = BTG.APIEvents.ON_METADATA;
					api.register(new BTG.BeaconReporter);
					evt.remove(this.onMetadata);
					evt.dispatch(metadata);

					this.onMetadata = function(){
						return null;
					};
				}
			},
			init : function(){
				api.register(this);
			}
		};
	}()).init();
})(BTG);
