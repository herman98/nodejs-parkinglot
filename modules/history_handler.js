const fs = require("fs"); 

class HistoryHandler {
    constructor(json_module, json_file) {
        // Reading JSON file 
        this.json_filename = json_file;
        this.json_module = json_module;  
        this.json_object = {};
        this.json_data = {};
        this.length = 0;
    }
    init(){
        this.json_req = require(this.json_module);  
        console.log('this.json_req: ', this.json_req);
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

        this.json_req.push(this.json_object);
        this.length++;
    }
    get_json_data() {
        return this.json_data;
    }
    save() {
        fs.writeFile(this.json_filename, JSON.stringify(this.json_req), err => {
            // Checking for errors 
            if (err)
                throw err;
            // console.log("Done writing to file: " + this.json_filename); // Success 
        });
    }
    get_lenght_data() {
        return this.length;
    }
}
  
module.exports = HistoryHandler;