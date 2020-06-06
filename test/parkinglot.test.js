var json_handler = require('../modules/json_handler');
const assert = require('assert');

json_obj = new json_handler(
    '../fixtures/parking_lot.json', 'fixtures/parking_lot.json');

json_obj.init_json_file()

describe('JSON Handler Test', () => {
    it('should return length is 0', () => {
            assert.equal(json_obj.get_length_data(), 0);
        });
    it('should return length is 8', () => {
        for (let index = 1; index <= 8; index++) {
            let new_slot = { 
                "status": false, 
                "slot_no": index,
                "car_plat_number": ''
            }
            json_obj.push(new_slot);
        }
        json_obj.save();
        assert.equal(json_obj.get_length_data(), 8);
    });
});
