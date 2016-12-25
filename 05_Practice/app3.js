var util = require('util');
function Person() {
    this.fName = 'Manjuanand';
    this.lName = 'Toladinni'
};

Person.prototype.greet = function(){
    console.log(`Hello Mr ${this.fName} ${this.lName}, badge number -${this.badgeNumber}`);
}

function PoliceMan(){
    //Access to parent object properties
    Person.call(this);
    this.badgeNumber = '130787';
};

util.inherits(PoliceMan, Person);
var police = new PoliceMan();
police.greet();
