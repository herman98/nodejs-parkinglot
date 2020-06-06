#!/usr/bin/env node

var json_handler = require('../modules/json_handler');

console.log( "history - status !" );
/*
Status.	    Registration No.    Charge  TimeStamp
park	    KA-01-HH-1234		0       2020-06-06T13:03:13.120Z
leave	    KA-01-HH-9999		100     2020-06-06T13:03:16.600Z
*/

json_obj = new json_handler(
    '../fixtures/history.json', 'fixtures/history.json');

json_obj.init();

json_obj.read();
var json_data = json_obj.get_json_data();
// console.log('json_data: ' + json_data)

console.log("Status.\t\tRegistration No.\tCharge\tTimeStamp")
for (let i = 0; i < json_data.length; i++) {
    console.log(json_data[i]['park_status'] + "\t\t" + json_data[i]['car_plat_number'] + "\t\t" + json_data[i]['hours']+ "\t" + json_data[i]['timestamp'])
}

return 0
