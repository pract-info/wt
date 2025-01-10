const fs = require('fs'); 
const filePath = './delete.txt'; 
fs.unlink(filePath, (err) => { 
if (err) { 
console.error(`Error deleting file: ${err.message}`); 
return; 
} 
console.log('File deleted successfully'); 
});