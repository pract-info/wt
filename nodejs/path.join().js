const path = require('path'); 
const directory = 'users'; 
const subDirectory = 'saurabh'; 
const fileName = 'document.txt'; 
const filePath = path.join(directory, subDirectory, fileName); 
console.log('Combined Path:', filePath);