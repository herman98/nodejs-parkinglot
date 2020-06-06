#!/usr/bin/env node
// var log = require('../modules/log');
var json_handler = require('../modules/json_handler');

console.log( "park !" );

var car_plat_number = process.argv[2];
//validation 
if (car_plat_number == undefined) {
    console.log('please input resigtration number, eg: park KA-01-BB-0001');
    return -2;
}


json_obj = new json_handler(
    '../fixtures/parking_lot.json', 'fixtures/parking_lot.json');

json_obj.init();

var status = json_obj.find_empty_slot();
// console.log('status: ' + status)
if (status==false){
    console.log('Sorry, parking lot is full');
    return -1;
}

var id_empty = json_obj.get_id_empty_slot()
// console.log('id_empty: ' + id_empty)
if (id_empty > 0){
    json_obj.update(id_empty, car_plat_number, true)
}

console.log('Allocated slot number: ' + id_empty + ' with plat number: ' + car_plat_number);
return 0