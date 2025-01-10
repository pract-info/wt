var fs = require("fs"); 
var data = fs.readFileSync("newFile.txt","utf-8"); 
console.log(data); 
console.log("------END OF FILE------"); 