'use strict';
class Person{
    constructor(firstName, lastName){
        this.fName = firstName || 'Manjuanand';
        this.lName = lastName || 'Toladinni';
    }    
}

class Employee extends Person{
    constructor(num){
        super();
        this.empNum = num;
    }
    greet(){
        console.log(`Hello Mr. ${this.fName} ${this.lName}`);
    }
}

let e1 = new Employee('130787');
e1.greet();