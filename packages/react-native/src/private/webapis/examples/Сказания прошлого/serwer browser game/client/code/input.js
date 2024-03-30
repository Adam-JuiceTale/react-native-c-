socket.on('matic',function(somp){
if(somp.name === playerlist[itsim].name){
playerlist[itsim].thismatic = somp.thismatic
playerlist[itsim].timermatic = 15
}
console.log(123)
})
socket.on('matic-',function(somp){
if(somp.name === playerlist[itsim].name){
playerlist[itsim].thismatic = somp.thismatic
playerlist[itsim].timermatic = -15
}
console.log(123)
})