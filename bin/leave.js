#!/usr/bin/env node

var json_handler = require('../modules/json_handler');

console.log( "leave !" );

// Registration number KA-01-BB-0001 with Slot Number 3 is free with Charge 50
// Registration number DL-12-AA-9999 not found

var car_plat_number = process.argv[2];
var charge = process.argv[3];

//validation 
if (car_plat_number == undefined || charge == undefined) {
    console.log('please input resigtration number and charge, eg: leave KA-01-BB-0001 40');
    return -2;
}
json_obj = new json_handler(
    '../fixtures/parking_lot.json', 'fixtures/parking_lot.json');

json_obj.init();

var status = json_obj.find_plat_no(car_plat_number.trim());
console.log('status: ' + status)
if (status==false){
    console.log("Registration number " + car_plat_number + ' not found');
    return -1;
}

var id_slot = json_obj.get_id_slot()
console.log('id_slot: ' + id_slot)
if (id_slot > 0){
    json_obj.update(id_slot, '', false)
} 

console.log('Registration number: ' + car_plat_number + ' with Slot Number: ' + id_slot + ' is free with Charge ' + charge);
return 0
