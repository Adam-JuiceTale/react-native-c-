  var fs = require('fs');//импортировать модуль работы с файловой системой
  
  var data = fs.readFileSync('untitled2.obj', 'utf-8');//загрузить файл, который нужно поменять
  var newValue01 = data.replace(/\#/g, 'жбх,');//найти все #, и добавить в очередь на ужаление
  var newValue02 = newValue01.replace(/usemtl/g, 'жбх,');//найти все o, и добавить в очередь на ужаление
  var newValue03 = newValue02.replace(/mtllib/g, 'жбх,');//найти все mtllib, и добавить в очередь на ужаление
  var newValue04 = newValue03.replace(/vt/g, 'жбх,');//найти все vt, и добавить в очередь на ужаление
  var newValue05 = newValue04.replace(/vn/g, 'жбх,');//найти все vn, и добавить в очередь на ужаление
  var newValue06 = newValue05.replace(/s/g, 'жбх,');//найти все vn, и добавить в очередь на ужаление
  var newValue07 = newValue06.replace(/o/g, 'жбх,');//найти все vn, и добавить в очередь на ужаление
var newValue0 =newValue07.replace(/^жбх,.*?$/gim, '');//удалить все строки, находящиеся в очереди на удаление
  var newValue = newValue0.replace(/ /g, ',  ');//конвертировать пробелы в запятые
    var newValue2 =newValue.replace(/v/g, '');//
	  var newValue25 = newValue2.replace(',', '');//удалить самую первую запятую
	  //var data2 = fs.readFileSync('f.obj', 'utf-8');
//var newValue3 = newValue25.replace(/ /g, ',');
//var newValue255 = newValue25.replace('f', '');//удалить самую первую f
//console.log(newValue25.indexOf("f", 0))
var newValue254 =newValue25.replace(/^f.*?$/gim, '');//удалить все строки, начинающиеся с f
var newValue253 =newValue254.replace(/^\s*[\r\n]/gm, '');//удалить все пустые строки
var newValue255= newValue25.slice(newValue25.indexOf("f", 0))
var newValue256 = newValue255.replace('f', '')
var newValue257 =newValue256.replace(/f/g, '');
var newValue258 =newValue257.replace(/\//g, ',');
var newValue259 = newValue258.replace(',', '');
var newValue260 = newValue259.replace(/^\s*[\r\n]/gm, '');//удалить все пустые строки
var nameList = newValue260.split(',');
var nameList2 = newValue253.split(',');
for(var i=0;i<nameList.length;i++){
	nameList[i]-=1
}
for(var i=0;i<nameList2.length;i++){
	nameList2[i]=nameList2[i]/1
}
var total = nameList2.push(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
  fs.writeFileSync('bunny.js', 'var bunny = [{"verts":['+newValue253+'],"faces":['+newValue260+'],"offset":[0,0,0]}]', 'utf-8');
  //fs.writeFileSync('filelistSync2.txt', newValue260, 'utf-8');

  console.log('readFileSync complete');