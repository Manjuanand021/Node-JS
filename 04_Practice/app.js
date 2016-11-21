// let config = require('./config');
// let Emitter = require('events');

// let evt = new Emitter();
// evt.on(config.events.GREET, function(){
//     console.log('Something happened');

// });
// evt.emit(config.events.GREET);


var figlet = require('figlet');

figlet.text('Lets get you onboard', {
    font: 'colossal',
    horizontalLayout: 'controlled smushing',
    verticalLayout: 'controlled smushing'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
