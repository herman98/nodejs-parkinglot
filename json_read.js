// //Ex 1: 
// // Requiring users file 
// const users = require("./fixtures/users.json"); 
  
// console.log(users); 

// //Ex 2: 

// const fs = require("fs"); 
// // Read users.json file 
// fs.readFile("fixtures/users.json", function(err, data) { 
      
//     // Check for errors 
//     if (err) throw err; 
   
//     // Converting to JSON 
//     const users = JSON.parse(data); 
      
//     console.log(users); // Print users  
// }); 


//Ex 3:
const fs = require("fs"); 

// STEP 1: Reading JSON file 
const users = require("./fixtures/users.json"); 

// Defining new user 
let user = { 
	name: "New User", 
	age: 30, 
	language: ["PHP", "Go", "JavaScript"] 
}; 

// STEP 2: Adding new data to users object 
users.push(user); 

// STEP 3: Writing to a file 
fs.writeFile("fixtures/users-1.json", JSON.stringify(users), err => { 
	
	// Checking for errors 
	if (err) throw err; 

	console.log("Done writing"); // Success 
}); 

console.log(users);