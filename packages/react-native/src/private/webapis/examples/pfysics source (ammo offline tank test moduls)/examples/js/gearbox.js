var gearbox=function(lib,car,direction){
car.engineForce0 = 8 - car.getCurrentSpeedKmHour();
car.engineForce =car.engineForce0*direction

}