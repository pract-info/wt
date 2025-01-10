var events = require('events'); 
var eventEmitter = new events.EventEmitter(); 
var myEventHandler = function () { 
 
    console.log('Hello World!!'); 
} 
eventEmitter.on('MCA', myEventHandler); 
 
eventEmitter.emit('MCA'); 