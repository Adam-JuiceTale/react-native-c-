var sound = {}
var vol= 0.0
sound.engine_WLA_42 = new Audio(); 
sound.engine_WLA_42.src = "client/sound/Untitled.ogg"; 
sound.engine_WLA_42.preservesPitch = false
var soundengine = function(axel){
//sound.engine_WLA_42.load()
if(playerlist[itsim].engine === 'WLA_42'){
sound.engine_WLA_42.volume = vol;
sound.engine_WLA_42.play();
sound.engine_WLA_42.playbackRate = axel/10+0.5//ашибка Uncaught TypeError: Failed to set the 'playbackRate' property on 'HTMLMediaElement': The provided double value is non-finite.
}
}