var mysql = require('mysql'); 
var conn = mysql.createConnection({ 
host: 'localhost', 
user:'root', 
password: 'pragati', 
database:'MCA'}); 
conn.connect( function(error){ 
if(error) throw error; 
conn.query("create table emp1(id int, ename varchar(10))",function(error){ 
if(error) throw error; 
console.log("Table created");});});