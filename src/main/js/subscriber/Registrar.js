(function(BTG){
	BTG.Registrar = (function(){
		var	event = BTG.APIEvents.ON_CONFIG,
			api   = BTG.SubscriberAPI;
		return {
			onRegister : function(){
				console.log('>Registrar.onRegister');
				return {
					ON_CONFIG : this.onConfig
				};
			},
			onConfig : function(config){
				console.log('Registrar.onConfig', config);
				if(config.comScoreEnabled){
					api.register(new BTG.Comscore);
				}
				if(config.omnitureEnabled){
					api.register(new BTG.AppMeasure);
				}
				event.remove(this.onConfig);
				event.dispatch(config);
				this.onConfig = function(){
					return null;
				};
			},
			init: function(){
				api.register(this);
			}
		};
	}()).init();
})(BTG);
