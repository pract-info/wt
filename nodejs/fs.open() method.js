// Import the fs module 
const fs = require('fs'); 
const path = require('path'); 
// Define the path for the new file 
const filePath = path.join(__dirname, 'newFile.txt'); 
// Use fs.open() to create a new empty file 
fs.open(filePath, 'w', (err, file) => { 
if (err) throw err; 
console.log('New empty file created successfully'); 
}); 