(function(BTG){
	BTG.EventAPI = (function(){
		var	playerEvent     = BTG.PlayerEvents,
			freeWheelEvent  = BTG.FreeWheelEvents,
			appMeasureEvent = BTG.AppMeasureEvents;
		return {
			registerSubscriber : function(subscriber){
				if(typeof subscriber.onRegister === 'function'){
					try{
						subscriber.onRegister();
						subscriber.onRegister=function(){};
					}catch(e){
					}
				}
			},
			onConfig : function(data){
				playerEvent.ON_CONFIG.dispatch(data);
			},
			onMetadata : function(data){
				playerEvent.ON_METADATA.dispatch(data);
			},
			onPlay : function(data){
				playerEvent.ON_PLAY.dispatch(data);
			},
			onPlayhead : function(playhead){
				playerEvent.ON_PLAYHEAD.dispatch(playhead);
			},
			onPause : function(playhead){
				playerEvent.ON_PAUSE.dispatch(playhead);
			},
			onUnPause : function(playhead){
				playerEvent.ON_UNPAUSE.dispatch(playhead);
			},
			onSeekStart : function(playhead){
				playerEvent.ON_SEEKSTART.dispatch(playhead);
			},
			onSeekEnd : function(playhead){
				playerEvent.ON_SEEKEND.dispatch(playhead);
			},
			onBufferingStart : function(){
				playerEvent.ON_BUFFERINGSTART.dispatch();
			},
			onBufferingEnd : function(){
				playerEvent.ON_BUFFERINGEND.dispatch();
			},
			onPlayEnd : function(){
				playerEvent.ON_PLAYEND.dispatch();
			},
			onAdMetadata : function(data){
				freeWheelEvent.ON_AD_METADATA.dispatch(data);
			},
			onAdPlay : function(){
				freeWheelEvent.ON_AD_PLAY.dispatch();
			},
			onAdPlayEnd : function(){
				freeWheelEvent.ON_AD_PLAYEND.dispatch();
			},
			onMediaOpen : function(data){
				appMeasureEvent.ON_MEDIA_OPEN.dispatch(data);
			},
			onMediaClose : function(data){
				appMeasureEvent.ON_MEDIA_CLOSE.dispatch(data);
			},
			onComscoreBeaconLoaded : function(data){
				BTG.ComscoreEvents.ON_BEACON_LOADED.dispatch(data);
			}
		};
	}());
})(BTG);
