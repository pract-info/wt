var fs = require("fs"); 
fs.readFile("newFile.txt","utf-8",(err,data)=>{console.log(data)}); 
console.log("------END OF FILE------"); 