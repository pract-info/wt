const http = require('http'); 
const fs = require('fs'); 
const path = require('path'); 
// Define the path to the HTML file 
const filePath = path.join(__dirname, 'readhtmlfile.html'); 
// Create an HTTP server 
const server = http.createServer((req, res) => { 
fs.readFile(filePath, (err, data) => { 
if (err) { 
res.statusCode = 500; 
res.end('Error reading file'); 
return; 
} 
res.statusCode = 200; 
res.end(data); 
}); 
}); 
// Define the port and start the server 
const port = 3000; 
server.listen(port, () => { 
console.log('Server running at http://localhost:$(port)'); 
});

// to display output visit http://localhost:3000