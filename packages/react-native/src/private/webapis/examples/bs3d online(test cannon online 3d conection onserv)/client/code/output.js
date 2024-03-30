//чат
var chatText = document.getElementById('chat1');
var chatInput = document.getElementById('chat2');
var chatForm = document.getElementById('chat3');
	socket.on('addToChat',function(somp){
	if(somp.playerName === 'bojik' && somp.somp2 === 'krash15')
		chatText.innerHTML += '<div style="color: rgb(34, 34, 34);"><font color="#ff0000">' + 'Сервер крашнется через 15 минут, удачной игры!' + '</font></div>';
	else if(somp.playerName === 'маугли' || somp.playerName === 'Алекс34' || somp.playerName === 'Dubin' || somp.playerName === 'narkotik')
		chatText.innerHTML += '<div style="color: rgb(34, 34, 34);"><font color="#FFFFFF">' + somp.playerName + '</font>' + '<font color="#ffaa00">(Огнемёт)</font>' + '<font color="#a3a3a3">:' + somp.somp2 + '</font></div>';
	else{
		chatText.innerHTML += '<div style="color: rgb(34, 34, 34);"><font color="#FFFFFF">' + somp.playerName + '</font>' + '<font color="#a3a3a3">:' + somp.somp2 + '</font></div>';
	}
	chatText.scrollTop = chatText.scrollHeight;
	})
	

	
	chatForm.onsubmit =  function(somp){
		somp.preventDefault();
		if(chatInput.value[0] === '/')
		socket.emit('evalser',chatInput.value.slice(1));
		else if(chatInput.value[0] === '[')
		socket.emit('banuser',chatInput.value.slice(1));
		else
		socket.emit('sendmesg',chatInput.value);
		chatInput.value = '';
	}

var button_condition = {
w:false,
a:false,
s:false,
d:false,
}
document.oncontextmenu = function(event){
if(gamediv.style.display === 'inline-block')
	event.preventDefault();
}
document.onkeydown = function(event){
if(gamediv.style.display === 'inline-block'){
if(event.keyCode === 87){
if(button_condition.w === false){
button_condition.w = true
socket.emit('output',{button:'trottle',status:true})
}
}
if(event.keyCode === 65){
if(button_condition.a === false){
button_condition.a = true
socket.emit('output',{button:'left',status:true})
}
}
if(event.keyCode === 83){
if(button_condition.s === false){
button_condition.s = true
socket.emit('output',{button:'break',status:true})
}
}
if(event.keyCode === 68){
if(button_condition.d === false){
button_condition.d = true
socket.emit('output',{button:'right',status:true})
}
}
}
}
document.onkeyup = function(event){
if(gamediv.style.display === 'inline-block'){
if(event.keyCode === 87){
button_condition.w = false
socket.emit('output',{button:'trottle',status:false})
}
if(event.keyCode === 65){
button_condition.a = false
socket.emit('output',{button:'left',status:false})
}
if(event.keyCode === 83){
button_condition.s = false
socket.emit('output',{button:'break',status:false})
}
if(event.keyCode === 68){
button_condition.d = false
socket.emit('output',{button:'right',status:false})
}
}
}