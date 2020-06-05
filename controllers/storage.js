var dt = require("../modules/core_module");
var log = require("../modules/log");
var Dictionary = require("../modules/dictionary");

log.debug(dt.myDateTime());

var dict_parking_lot = new Dictionary()
log.debug("dict_output #1: " + dict_parking_lot.fetch());

dict_parking_lot.store('satu', 'hohoho');
dict_parking_lot.store('dua', 'aloha');
log.debug("key['satu'] #2: " + dict_parking_lot.fetch('satu'));
log.debug("key['dua'] #3: " + dict_parking_lot.fetch('dua'));

//fetch_all 
let dict_all =  dict_parking_lot.fetch_all();
for(var item in dict_all){
    log.info("fetch_all item: " + item + ' ' + dict_all[item]);
}

