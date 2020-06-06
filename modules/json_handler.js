// const log = require("../modules/log")
const fs = require("fs"); 


class JSONHandler {
    constructor(json_module, json_file) {
        // Reading JSON file 
        this.json_filename = json_file;
        this.json_module = json_module;  
        this.json_object = {};
        this.json_data = {};
        this.length = 0;
        this.id_empty_slot = 0;
        this.id_slot = 0;
    }
    init(){
        this.json_req = require(this.json_module);  
        // console.log('this.json_req: ', this.json_req);
        return 0;
    }
    read_async(){
        fs.readFile(this.json_filename, function(err, data) { 
            
            // Check for errors 
            if (err) throw err; 
        
            // Converting to JSON 
            const json_data = JSON.parse(data); 
            
            console.log('json_data: ' + json_data); 
        });
    }
    read() {
        var data = fs.readFileSync(this.json_filename, 'utf8');
        this.json_data = JSON.parse(data);
        // console.log('this.json_data: ' + JSON.stringify(this.json_data[0])); 
    }
    init_json_file(){
        let result = "[]"
        fs.writeFileSync(this.json_filename, result);
        this.length=0;

        this.init();
        // console.log("Init json file success: " + this.json_filename); // Success
    }
    push(new_object) {
        this.json_object = new_object;

        // try {
        this.json_req.push(this.json_object);
        this.length++;
        // } catch (error) {
        //     console.error('error: ' + error)
        // }

        // console.log("Allocated slot number: " + this.json_object['slot_no']); 
        
    }
    find_empty_slot(){

        //check if slot_no if exist
        // this.json_object['slot_no']
        // console.log("this.json_object['slot_no']: " + this.json_object['slot_no']); 
        this.read();

        var flag_found = false;
        for (let i = 0; i < this.json_data.length; i++) {
            // console.log(this.json_data[i]['status']);
            
            if (this.json_data[i]['status'] === false) {
                flag_found = true;
                this.id_empty_slot = this.json_data[i]['slot_no'];
                break;
            }
        }

        return flag_found;
    }
    get_id_empty_slot() {
        return this.id_empty_slot;
    }
    update(id_empty, plat_no, status_new) {
        var index_found = -1;
        for (let i = 0; i < this.json_req.length; i++) {
            // console.log(this.json_req[i]['slot_no']);
            
            if (this.json_req[i]['slot_no'] === id_empty) {
                index_found = i;
                break;
            }
        }
        
        //change the value in the in-memory object
        this.json_req[index_found].car_plat_number = plat_no;
        this.json_req[index_found].status = status_new;
        //Serialize as JSON and Write it to a file
        fs.writeFileSync(this.json_filename, JSON.stringify(this.json_req));
    }
    save() {
        // console.log('this.json_req: ', this.json_req);
        fs.writeFile(this.json_filename, JSON.stringify(this.json_req), err => {
            // Checking for errors 
            if (err)
                throw err;
            // console.log("Done writing to file: " + this.json_filename); // Success 
        });
    }
    find_plat_no(plat_no) {
        this.read();

        var flag_found = false;
        for (let i = 0; i < this.json_data.length; i++) {
            // console.log(this.json_data[i]['car_plat_number']);
            
            if (this.json_data[i]['car_plat_number'] == plat_no) {
                flag_found = true;
                this.id_slot = this.json_data[i]['slot_no'];
                break;
            }
        }

        return flag_found;
    }
    get_id_slot() {
        return this.id_slot;
    }
    get_json_data() {
        return this.json_data;
    }
    get_length_data() {
        return this.length;
    }

}
  
module.exports = JSONHandler;