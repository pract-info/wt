var http = require('http'); 
const server = http.createServer((req, res)=> 
{ 
res.setHeader('Content-Type','text/plain'); 
res.write('Response From Server: XYZ'); 
res.end(); }); 
server.listen(3030,'localhost',()=>{ 
console.log("Server running at http://localhost:3030");}); 