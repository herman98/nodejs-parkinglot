#!/usr/bin/env node

var json_handler = require('../modules/json_handler');

console.log( "status !" );
/*
Slot No.	Registration No.
1		KA-01-HH-1234		
2		KA-01-HH-9999		
3		KA-01-BB-0001		
4		KA-01-HH-7777		
5		KA-01-HH-2701	
*/

json_obj = new json_handler(
    '../fixtures/parking_lot.json', 'fixtures/parking_lot.json');

json_obj.init();

json_obj.read();
var json_data = json_obj.get_json_data();
// console.log('json_data: ' + json_data)

console.log("Slot No.\tRegistration No.")
for (let i = 0; i < json_data.length; i++) {
    // console.log(json_data[i]['status']);
    
    if (json_data[i]['status'] === true) {
        flag_found = true;
        console.log(json_data[i]['slot_no'] + "\t\t" + json_data[i]['car_plat_number'])
    }
}

return 0
