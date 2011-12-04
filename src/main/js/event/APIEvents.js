(function(BTG){
	BTG.APIEvents = {
		ON_CONFIG        : new BTG.Event(),
		ON_METADATA      : new BTG.Event(),
		ON_PLAY          : new BTG.Event(),
		ON_PLAYHEAD      : new BTG.Event(),
		ON_PAUSE         : new BTG.Event(),
		ON_UNPAUSE       : new BTG.Event(),
		ON_SEEKSTART     : new BTG.Event(),
		ON_SEEKEND       : new BTG.Event(),
		ON_BUFERINGSTART : new BTG.Event(),
		ON_BUFFERINGEND  : new BTG.Event(),
		ON_PLAYEND       : new BTG.Event()
	};
})(BTG);
