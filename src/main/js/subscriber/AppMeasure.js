(function(BTG){
	BTG.AppMeasure = (function(){
		var config = null;
		return {
			onRegister: function(){
				console.log("AppMeasure.onRegister");
				var event = BTG.PlayerEvents;
				event.ON_CONFIG.add(this.onConfig);
				event.ON_PLAY.add(this.onPlay);
				event.ON_PLAYHEAD.add(this.onPlayhead);
				event.ON_PAUSE.add(this.onPause);
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
