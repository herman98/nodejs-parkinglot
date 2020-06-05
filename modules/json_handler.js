const log = require("../modules/log")
const fs = require("fs"); 


class JSONHandler {
    constructor(json_module, json_file) {
        // Reading JSON file 
        this.json_filename = json_file;
        this.json_module = require(json_module);  
        this.json_object = {};
        this.length = 0;
    }
    read(){
            fs.readFile(this.json_filename, function(err, data) { 
            
            // Check for errors 
            if (err) throw err; 
        
            // Converting to JSON 
            const json_data = JSON.parse(data); 
            
            log.info('json_data: ' + json_data); 
        });
    }
    push(new_object) {
        this.json_object = new_object;
        this.json_module.push(this.json_object);
        this.length++;
    }
    remove(object_index) {
        return object_index;
    }
    save() {
        log.info('this.json_file: '+ this.json_module)
        log.info('this.json_filename: '+ this.json_filename)

        fs.writeFile(this.json_filename, JSON.stringify(this.json_module), err => {
            // Checking for errors 
            if (err)
                throw err;
            log.info("Done writing to file: " + this.json_filename); // Success 
        });
    }
}
  
  
  
//   JSONHandler.prototype.fetch_all = function() {
//     var output = {}
//     for (var k in this.keys) {
//       output[k] = this.keys[k] 
//       console.log(this.keys[k])
//     };
//     return output;
//   };

//   JSONHandler.prototype.hasKey = function(key) {
//     for (var k in this.keys) {
//       if (key == k) {
//         return true;
//       } else {
//         return false;
//       }
//     };
//     return false;
//   };
  
//   JSONHandler.prototype.remove = function(key) {
//     if (this.keys[key]) {
//       delete this.keys[key];
//       this.length--;
//     }
//   };
  
//   JSONHandler.prototype.reject = function(callback) {
//     for (var k in this.keys) {
//       if (callback(k, this.keys[k])) {
//         delete this.keys[k];
//       }
//     }
//   };
  
  module.exports = JSONHandler;