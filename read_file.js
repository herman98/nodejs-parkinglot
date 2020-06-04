// Include fs module 
var fs = require('fs'); 
  
// Ex 1:
// Use fs.readFile() method to read the file 
fs.readFile('fixtures/demo.txt', 'utf8', function(err, data){ 
      
    // Display the file content 
    console.log(data); 
}); 
  
console.log('readFile called'); 

// Ex 2:
// Use fs.readFile() method to read the file 
// fs.readFile('fixtures/demo.txt', (err, data) => { 
//     console.log(data); 
//  }) 