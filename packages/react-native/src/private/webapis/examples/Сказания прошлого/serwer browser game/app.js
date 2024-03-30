var express = require('express');
var app = express();
var serv = require('http').Server(app);

//var socketsid=0
var socketlist={}
var roomes=0
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
app.get('/',function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));

serv.listen(process.env.PORT || 2016);

var io = require('socket.io')(serv,{})
io.sockets.on('connection', function(socket){
	console.log(123)
 socket.name = socket.id
 //socketsid++
 
 socket.emit('whoaem',{id:socket.id});
 socket.state=null
 socket.deck=0
 socket.raiting=0//
 socket.roume=null
 socket.hero='pingu'
 socketlist[socket.id] = socket;

 var deck=[]
 var deck0=[]
 for(var i=0;i<15;i++){
	 deck.push('wolshama')
	 deck.push('mehungry')
 }
for(var i=0;i<9;i++){
	if(i===0)
 socket.emit('decklist',{i,deck:deck,name:'shahungry'})//временное решение, пока нету бд
else
socket.emit('decklist',{i,deck:deck0,name:'Пустой слот'})

}
socket.on('button',function(info){
if(info.type==='searchgame'){
socket.state='searchgame'
socket.deck=info.deka
socket.emit('searchgame','inf')
}
});
	socket.on('disconnect',function(){
		delete socketlist[socket.id];
	});
});
setInterval(function (){
for(var i in socketlist){
console.log(socketlist[i].state)
if(socketlist[i].state==='searchgame'){
for(var i2 in socketlist){
if(socketlist[i]!==socketlist[i2]&&socketlist[i2].state==='searchgame'){
socketlist[i].state='play'
socketlist[i2].state='play'
socketlist[i].roume=roomes
socketlist[i2].roume=roomes
socketlist[i].emit('play',{name:socketlist[i2].name,hero:socketlist[i2].hero})
socketlist[i2].emit('play',{name:socketlist[i].name,hero:socketlist[i].hero})
roomes++
}
}
}
}
},1000/25)