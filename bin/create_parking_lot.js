#!/usr/bin/env node

var log = require('../modules/log');
var json_handler = require('../modules/json_handler');

console.log( "CREATE Parking Lot!" );

// EX:1 create_parking_lot jacob 45 hohoho
/*
for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}*/

var lot_number = process.argv[2];
var lot_min_num = 0, lot_max_num = 1000;
try {
    var int_lot_number = parseInt(lot_number);
    if (int_lot_number > lot_min_num && int_lot_number <= lot_max_num){
        console.log('max lot number: ' + int_lot_number);
    } else {
        console.log('please add max lot number argument, e.g: create_parking_lot 6');
    }
} catch (error) {
    console.log('max lot number is not numeric, error: ' + error);
}

json_obj = new json_handler(
    '../fixtures/parking_lot.json', 'fixtures/parking_lot.json');

json_obj.read();

for (let index = 1; index <= lot_number; index++) {
    log.info('Allocated slot number: ' + index);
    let new_slot = { 
        "status": false, 
        "slot_no": index,
        "car_plat_number": ''
    }
    json_obj.push(new_slot);
}

json_obj.save();
json_obj.read();