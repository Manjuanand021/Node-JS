'use strict';
class Person{
    constructor(firstName, lastName){
        this.fName = firstName || 'Manjuanand';
        this.lName = lastName || 'Toladinni';
    }

    greet(){
        console.log(`Hello Mr. ${this.fName} ${this.lName}`);
    }
}

class Employee extends Person{
    constructor(num){
        super();
        this.empNum = num;
    }
}

let e1 = new Employee('130787');
e1.greet();