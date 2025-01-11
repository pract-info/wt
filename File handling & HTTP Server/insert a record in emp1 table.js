var mysql = require('mysql'); 
var conn = mysql.createConnection({ 
host: 'localhost', 
user:'root', 
password: 'pragati', 
database:'MCA' 
}); 
conn.connect( function(error) 
{ 
if(error) throw error; 
conn.query("insert into emp1 values(1,'KF')",function(error){ 
if(error) throw error; 
console.log("Record inserted"); 
}); 
});