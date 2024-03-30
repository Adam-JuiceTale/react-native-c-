var ctx = document.getElementById('ctx').getContext('2d')
var ctxhud = document.getElementById('ctxhud').getContext('2d')

var image = {}
image.body_muslcar = new Image();
image.body_muslcar.src = 'client/img/body_muslcar2.png'
image.map = new Image();
image.map.src = 'client/img/grts_desertvalley.png'
image.speedometr = new Image();
image.speedometr.src = 'client/img/speedometr.jpg'
image.nail = new Image();
image.nail.src = 'client/img/nail.png'
image.nail2 = new Image();
image.nail2.src = 'client/img/nail2.png'
image.staris2 = new Image();
image.staris2.src = 'client/img/staris3.png'

var WIDTH2 = 0
var HEIGHT2 = 0
//HEIGHT2 = window.innerHeight;
//WIDTH2 = window.innerWidth;
/*
var correct = function(spd){
WIDTH2 = (window.innerWidth - (window.screen.width - window.screen.availWidth) - 4)*spd// - 20;
HEIGHT2 = (window.innerHeight - (window.screen.height - window.screen.availHeight)- 7)*spd// - 20;

  ctx.canvas.width  = (window.innerWidth - (window.screen.width - window.screen.availWidth) - 4)*spd// - 20;
  ctx.canvas.height = (window.innerHeight - (window.screen.height - window.screen.availHeight)- 7)*spd// - 20;
  ctx.canvas.style.width = window.innerWidth - (window.screen.width - window.screen.availWidth) - 4

  
WIDTH3 = window.innerWidth - (window.screen.width - window.screen.availWidth) - 4// - 20;
HEIGHT3 = window.innerHeight - (window.screen.height - window.screen.availHeight)- 7// - 20;

  ctxhud.canvas.width  = window.innerWidth - (window.screen.width - window.screen.availWidth) - 4// - 20;
  ctxhud.canvas.height = window.innerHeight - (window.screen.height - window.screen.availHeight)- 7// - 20;
  }
*/
var correct = function(spd){
WIDTH2 = window.innerWidth *spd-2// - 20;
HEIGHT2 = window.innerHeight *spd-2// - 20;

  ctx.canvas.width  = window.innerWidth *spd-2// - 20;
  ctx.canvas.height = window.innerHeight *spd-2// - 20;
  ctx.canvas.style.width = window.innerWidth 

  
WIDTH3 = window.innerWidth // - 20;
HEIGHT3 = window.innerHeight // - 20;

  ctxhud.canvas.width  = window.innerWidth // - 20;
  ctxhud.canvas.height = window.innerHeight // - 20;
  }
var draw = function(somp){
//console.log(somp)
var spd2 = somp.speed
//при делении на значения меньше еденицы, деление превращается в умножение (2/0.5 = 4, что кратно умножению на 2). что бы этого не происходило, делитель недолжен опускатся ниже еденицы
if(spd2 < 3)//устанавливает отображение максимального выворота колёс
spd2 =3
var x = somp.x - playerlist[itsim].x;
var y = somp.y - playerlist[itsim].y;
//var x3 = somp.x3 - playerlist[itsim].x;
//var y3 = somp.y3 - playerlist[itsim].y;
//x3 += WIDTH2/2;//выравниваем по центру экрана
		//y3 += HEIGHT2/2;
var rotarx = (somp.x - playerlist[itsim].x)+ WIDTH2/2
var rotary = (somp.y - playerlist[itsim].y)+ HEIGHT2/2
x += WIDTH2/2;//выравниваем по центру экрана
		y += HEIGHT2/2;
		//здесь раньше также писалось смещение центра авто, что бы машина вращалась не вокруг своей оси, а вокруг колёс заднего моста. Без этого смещения казалось что машина рулится всеми колёсами, а со смещением на задние колёса, задниие колёса остаются как бы центром, а варщяют машину передние. Теперь это смещение задаётся на сервере
		
		x -= 250/2;//центрируем середину картинки в центр экрана
		y -= 100/2;
		if(somp.body === '1968_firebird'){
		somp.anim += somp.speed;
		if(somp.anim < 0)//когда значение становится отрицательным, то перестаёт работать правельная анимация вращения колёс
		somp.anim = 7
		var anim2 = Math.floor(somp.anim) % 7;
		ctx.save();
		ctx.translate(rotarx,rotary);//ctx.translate(rotarx-65,rotary);
		ctx.rotate(somp.angle * Math.PI / 180);
		ctx.translate(-rotarx,-rotary);//ctx.translate(-rotarx+65,-rotary);
		ctx.drawImage(image.staris2,anim2*220,0,220,120,x+22,y-15,82.5,45)
		ctx.drawImage(image.staris2,anim2*220,0,220,120,x+22,y+70,82.5,45)
		//ctx.restore();
		//ctx.save();
		//ctx.translate(rotarx,rotary);//ctx.translate(rotarx-65,rotary);
		//ctx.rotate(somp.angle * Math.PI / 180);
		//ctx.translate(-rotarx,-rotary);//ctx.translate(-rotarx+65,-rotary);
		ctx.translate(rotarx+80,rotary-40)
		ctx.rotate(somp.anglewheel*(39/spd2*3) * Math.PI / 180);
		ctx.translate(-rotarx-80,-rotary+40);//ctx.translate(-rotarx+65,-rotary);
		ctx.drawImage(image.staris2,anim2*220,0,220,120,x+160,y-15,82.5,45)
		ctx.restore();
		ctx.save();
		ctx.translate(rotarx,rotary);//ctx.translate(rotarx-65,rotary);
		ctx.rotate(somp.angle * Math.PI / 180);
		ctx.translate(-rotarx,-rotary);//ctx.translate(-rotarx+65,-rotary);
		ctx.translate(rotarx+80,rotary+45)
		ctx.rotate(somp.anglewheel*(39/spd2*3) * Math.PI / 180);
		ctx.translate(-rotarx-80,-rotary-45);//ctx.translate(-rotarx+65,-rotary);
		ctx.drawImage(image.staris2,anim2*220,0,220,120,x+160,y+70,82.5,45)
		ctx.restore();
		
		
		ctx.save();
		ctx.translate(rotarx,rotary);//ctx.translate(rotarx-65,rotary);
		ctx.rotate(somp.angle * Math.PI / 180);
		ctx.translate(-rotarx,-rotary);//ctx.translate(-rotarx+65,-rotary);
		ctx.drawImage(image.body_muslcar,x,y)
		ctx.restore();
		//ctx.fillRect(x3,y3,5,5)
		}
		if(somp.body === 'map'){
		//x -= 250/2;
		//y -= 100/2;
		ctx.drawImage(image.map,x,y,8000,8000)
		}
		
}

var vremmenno = function(somp){

}
var drawhud = function(axel){
ctxhud.fillText(playerlist[itsim].thismatic,30,30)
ctxhud.fillText(playerlist[itsim].anglewheel,30,50)
if(playerlist[itsim].body === '1968_firebird'){
ctxhud.drawImage(image.speedometr,WIDTH3-267,HEIGHT3-190,262,192)
ctxhud.save();
var rot1 = WIDTH3-275/2
var rot2 = HEIGHT3-180/2
var speed = playerlist[itsim].speed
if(speed < 0)
speed = -speed
ctxhud.translate(rot1,rot2);
ctxhud.rotate(-205+speed * Math.PI / 180*2.2);
ctxhud.translate(-rot1,-rot2);
ctxhud.drawImage(image.nail,WIDTH3-205,HEIGHT3-116,150,50)
ctxhud.restore();


if(playerlist[itsim].timermatic > 0){
ctxhud.drawImage(image.nail2,WIDTH3-205,HEIGHT3-116,150,50)
}
else if(playerlist[itsim].timermatic < 0){
ctxhud.drawImage(image.nail2,WIDTH3-205,HEIGHT3-116,150,50)
}else{
ctxhud.save();


ctxhud.translate(rot1,rot2);
ctxhud.rotate(-205+axel * Math.PI / 180*10);
ctxhud.translate(-rot1,-rot2);
//var maxspeed = 25
//if(playerlist[itsim].speed > 25)
ctxhud.drawImage(image.nail2,WIDTH3-205,HEIGHT3-116,150,50)
ctxhud.restore();
}
}
}