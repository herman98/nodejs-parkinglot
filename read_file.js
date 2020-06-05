// Include fs module 
var fs = require('fs'); 
  
// Ex 1:
// Use fs.readFile() method to read the file 
/*
fs.readFile('fixtures/demo.txt', 'utf8', function(err, data){ 
    // Display the file content 
    console.log(data); 
}); 
*/

// Ex 2:
try {
    // read contents of the file
    const data = fs.readFileSync('fixtures/file_input.txt', 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);

    // print all lines
    lines.forEach((line) => {
        console.log('line : ' + line);
    });
} catch (err) {
    console.error(err);
}

console.log('readFile called'); 