var playerlist = {}
var player = function(somp){
var pl = {};
//pl.id somp.id;
pl.name = somp.name;
pl.x = somp.x;
pl.y = somp.y;
pl.speed = 0;//somp.speed;//тут должен быть ноль, так как при подключении у игрока не может быть скорости!
pl.angle = somp.angle;
pl.anglewheel = 0;
pl.body = somp.body;
pl.engine = somp.engine;
pl.wheels = somp.wheels;
pl.thismatic = 0;
pl.timermatic = 0;
pl.anim = 0;
//pl.x3 = 0;
//pl.y3 = 0;
playerlist[pl.name] = pl
return pl;//?
}

var map = {
x:0,
y:0,
angle:0,
body:'map'
}
var itsim = null;
socket.on('itsim',function(somp){
itsim = somp
})
socket.on('neaw',function(somp){//походу в данном случае, может получится такая ситуация, что придёт 2 и более пакета одновремменно, это могут быть и 2 игрока, и игрок и пуля, да и как угодно, и код их по идее отработает
console.log(somp)
for(var i = 0 ; i < somp.player.length; i++){// здесь указывается пояснение .player., то есть длинну массива именно игроков
//new player(somp.player[i]);
player(somp.player[i]);// зачем указывать new ?
}
//for(var i = 0 ; i < somp.bullet.length; i++){

// }
})

socket.on('upd',function(somp){
for(var i = 0 ; i < somp.player.length; i++){
var pack = somp.player[i]
if(playerlist[pack.name]){//проверяет существует ли игрок на стороне клиента

if(pack.x !== undefined)//проверяет не отсутствует ли значение положения по иксу
playerlist[pack.name].x = pack.x//замеяет старое значение этого игрока, на новое, только что пришедшое, если значение не пришло, то оставляет прежнее значение
if(pack.y !== undefined)
playerlist[pack.name].y = pack.y
if(pack.angle !== undefined)
playerlist[pack.name].angle = pack.angle
if(pack.anglewheel !== undefined)
playerlist[pack.name].anglewheel = pack.anglewheel
if(pack.speed !== undefined)
playerlist[pack.name].speed = pack.speed
//if(pack.x3 !== undefined)
//playerlist[pack.name].x3 = pack.x3
//if(pack.y3 !== undefined)
//playerlist[pack.name].y3 = pack.y3
}
}
})
socket.on('delet',function(somp){

for(var i = 0 ; i < somp.player.length; i++){
delete playerlist[somp.player[i]];
}
})


setInterval(function(){
if(itsim !== null){
//if(gamediv.style.display === 'inline-block'){
//playerlist[itsim].x
ctx.clearRect(0,0,2000,2000)
ctxhud.clearRect(0,0,2000,2000)
var spd = playerlist[itsim].speed
if(spd < 0)
spd = -spd
spd=spd/50+1
if(playerlist[itsim].body === 'none')
spd = 0
correct(spd)
//ctx.drawImage(image.map,0 - playerlist[itsim].x,0 - playerlist[itsim].y,8000,8000)
draw(map)
for(var i in playerlist){
draw(playerlist[i])
vremmenno(playerlist[i])
//ctx.drawImage(image.body_muslcar,playerlist[i].x,0)
//ctx.fillText(playerlist[i].name,playerlist[i].x+20,20)
if(playerlist[i].timermatic > 0)
playerlist[i].timermatic--
else if(playerlist[i].timermatic < 0)
playerlist[i].timermatic++
}
var axel = playerlist[itsim].speed / playerlist[itsim].thismatic
if(isNaN(axel))
axel = 0
if(axel < 0)
axel = -axel
drawhud(axel)
soundengine(axel)
}
},33)