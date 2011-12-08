(function(BTG){
	BTG.AppMeasure = function(){
		var config = null;
		return {
			onRegister: function(){
				console.log("AppMeasure.onRegister");
				return {
					ON_CONFIG   : this.onConfig,
					ON_PLAY     : this.onPlay,
					ON_PLAYHEAD : this.onPlayhead,
					ON_PAUSE    : this.onPause
				};
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
	};
})(BTG);
