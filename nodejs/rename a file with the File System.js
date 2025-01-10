const fs = require('fs'); 
const path = require('path'); 
const oldPath = path.join(__dirname, 'oldFileName.txt'); 
const newPath = path.join(__dirname, 'newFileName.txt'); 
fs.rename(oldPath, newPath, (err) => { 
if (err) throw err; 
console.log('File renamed successfully'); 
});