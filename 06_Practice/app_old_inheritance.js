const util = require('util');
function Person() {
    this.fName = 'Manjuanand';
    this.lName = 'Toladinni';
}

Person.prototype.greet = () => {
    console.log(`Hello Mr. ${this.fName} ${this.lName}`);
}

function Employee(age) {
    //Call parent class constructor
    Person.call(this);
    this.age = age || 29;
}
Employee.prototype.sayHello = () => {
    console.log('Say hello');
}

util.inherits(Employee, Person);

let emp = new Employee(28);
emp.greet();