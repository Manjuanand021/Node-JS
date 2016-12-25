var EventEmitter = require('events');
var util = require('util');

function Greeter() {
    this.greetText = 'Event emitter inheritance using util lib';
}

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function(data) {
    this.emit('greet', data);
};

var grt1 = new Greeter();
grt1.on('greet', function(data) {
    console.log(data);
});
grt1.greet('helloss');
