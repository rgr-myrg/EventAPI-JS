(function(BTG){
	BTG.BeaconReporter = function(){
		var	MAX_VALUE  = Infinity,
			referrer   = null,
			metadata   = null,
			plyBeacons = [],
			endBeacons = [],
			isAd       = false,
			prevIsAd   = false,
			stopped    = false,
			playhead   = 0;
		var fixTime = function(num){
			num = !isNaN(num) ? num * 1000 : null;
			if(num < 0){
				num = metadata.duration * 1000 - Math.abs(num);
			}
			return num;
		};
		var hasBeacons = function(){
			var	beacons = metadata.beacons ? metadata.beacons : [],
				result  = false;
			if(beacons.length > 0){
				result = true;
				var size = beacons.length;
				for(var x = 0; x < size; x++){
					var beacon = beacons[x];
					if(beacon.startTime === MAX_VALUE){
						endBeacons.push(beacon);
					}else if(typeof beacon.startTime !== 'undefined'){
						beacon.startTime = fixTime(beacon.startTime);
						plyBeacons.push(beacon);
					}else if(typeof beacon.elapsed !== 'undefined'){
						beacon.elapsed = fixTime(beacon.elapsed);
						plyBeacons.push(beacon);
					}
				}
			}
			return result;
		};
		var isItTime = function(num, timeCount){
			return num === Math.round(timeCount/1000) * 1000 || num === 0;
		};
		var fireNow = function(beacon, count, playhead){
			console.log("fireNow count:"+count);
			console.log("fireNow playhead:"+playhead);
			var result = false;
			if(beacon.elapsedAfterAd && prevIsAd){
				result = isItTime(beacon.elapsed, count);
			}else if(beacon.elapsed >= 0 && !beacon.elapsedAfterAd){
				result = isItTime(beacon.elapsed, count);
			}else if(beacon.startTime >= 0){
				result = isItTime(beacon.startTime, playhead * 1000);
			}
			return result;
		};
		var getPropsData = function(props){
			var	size = props.length,
				data = {};
			for(var x=0; x<size; x++){
				var item = props[x];
				for(var i in item){
					if(item.hasOwnProperty(i)){
						data[item.name] = item.value;
					}
				}
			}
			return data;
		};
		var sendTracker = function(beacon){
			var data = beacon.props && beacon.props.length>0 ? getPropsData(beacon.props) : {};
			BTG.Beacon.send({
				url: BTG.Token.replace(beacon.url, metadata),
				data: data
			});
		};
		var fireBeacon = function(beacon, count, playhead){
			var result = false;
			if(fireNow(beacon, count, playhead)){
				sendTracker(beacon);
				result = true;
			}
			return result;
		};
		var checkBeacons = function(){
			var size = plyBeacons.length;
			for(var x=0; x<size; x++){
				var beacon = plyBeacons[x];
				if(fireBeacon(beacon, this.timer.currentCount(), playhead)){
					plyBeacons.splice(x,1);
					break;
				}
			}
			if(plyBeacons.length === 0){
				console.log('no more beacons');
				this.timer.removeListener(checkBeacons);
				this.timer.stop();
				this.stopped=true;
			}
		};
		return {
			onRegister : function(){
				console.log("BeaconReporter.onRegister");
				return {
					ON_CONFIG   : this.onConfig,
					ON_METADATA : this.onMetadata,
					ON_PLAY     : this.onPlay,
					ON_PLAYHEAD : this.onPlayhead,
					ON_PLAYEND  : this.onPlayEnd
				};
			},
			onConfig : function(config){
				console.log("BeaconReporter.onConfig data:", config);
				referrer = config.referrer ? config.referrer : "NO_REF";
			},
			onMetadata : function(data){
				console.log("BeaconReporter.onMetadata");
				metadata = data;
				isAd     = metadata.isAd;
			},
			onPlay : function(data){
				console.log("BeaconReporter.onPlay");
			//	metadata = data;
			//	isAd     = metadata.isAd;
				if(!isAd && hasBeacons()){
					this.timer = new BTG.Timer({
						milliseconds: 250,
						timerId: 'timer', 
						parent: this
					});
					this.stopped = false;
					this.timer.addListener(checkBeacons, this);
					this.timer.start();
				}
			},
			onPlayhead : function(num){
				playhead = num;
			},
			onPlayEnd : function(playhead){
				console.log("BeaconReporter.onPlayEnd");
				if(!isAd){
					var size = endBeacons.length;
					for(var x=0; x<size; x++){
						sendTracker(endBeacons[x]);
					}
				}
				prevIsAd=isAd;
			}
		};
	};
})(BTG);
