var schedule = require('node-schedule');

//Runs everyday at AM12:30
var scheduler = schedule.scheduleJob('00 30 00 * * 0-6', function(){
    
    console.log('DB copy completed!'); 
});
