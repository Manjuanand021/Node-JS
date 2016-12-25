// let config = require('./config');
// let Emitter = require('events');

// let evt = new Emitter();
// evt.on(config.events.GREET, function(){
//     console.log('Something happened');

// });
// evt.emit(config.events.GREET);


var figlet = require('figlet');

figlet('Hello World!', 'Standard', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }

    console.log(data);

    figlet.text('Again, Hello World!', 'Graffiti', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }

        console.log(data);

        figlet.text('Last time...', {
            font: 'Standard',
            horizontalLayout: 'full',
            verticalLayout: 'full'
        }, function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
        });

    });

});