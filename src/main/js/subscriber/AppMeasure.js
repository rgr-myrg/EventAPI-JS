(function(BTG){
	BTG.AppMeasure = (function(){
		var config = null;
		return {
			onRegister: function(){
				console.log("AppMeasure.onRegister");
				var event = BTG.PlayerEvents;
				event.ON_CONFIG.addListener(this.onConfig);
				event.ON_PLAY.addListener(this.onPlay);
				event.ON_PLAYHEAD.addListener(this.onPlayhead);
				event.ON_PAUSE.addListener(this.onPause);
			},
			onConfig: function(data){
				console.log("AppMeasure.onConfig data:",data);
				config = data;
			},
			onPlay: function(metadata){
				console.log("AppMeasure.onPlay");
			},
			onPlayhead: function(playhead){
				console.log("AppMeasure.onPlayhead playhead:"+playhead);
			},
			onPause: function(playhead){
				console.log("AppMeasure.onPause playhead:"+playhead);
			}
		};
	}());
})(BTG);
