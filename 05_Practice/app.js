var events = require('./config').events;
// var Emitter = require('./emitter');
// var emtr = new Emitter();
// emtr.on('greet', function(){
//     console.log('I am listener for cstom event you created.');
// });
// emtr.emit('greet');


var Emitter = require('events');
var emtr = new Emitter();
emtr.on(events.GREET, function() {
    console.log('I am listener.');
});

emtr.emit(events.GREET);
