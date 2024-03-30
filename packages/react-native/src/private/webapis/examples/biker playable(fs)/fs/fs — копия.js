  var fs = require('fs');
  
  var data = fs.readFileSync('v.obj', 'utf-8');

  var newValue = data.replace(/ /g, ',');
    var newValue2 =newValue.replace(/v/g, '');
	  var newValue25 = newValue2.replace(',', '');
	  var data2 = fs.readFileSync('f.obj', 'utf-8');
var newValue3 = data2.replace(/ /g, ',');
var newValue33 =newValue3.replace(/f/g, '');
var newValue4 =newValue33.replace(/\//g, '');
var newValue44 = newValue4.replace(',', '');
  fs.writeFileSync('filelistSync.txt', newValue25+newValue44, 'utf-8');

  console.log('readFileSync complete');