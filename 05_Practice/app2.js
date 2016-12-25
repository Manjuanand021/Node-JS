var obj2 = {
    name: 'Jane Doe'
}

var obj = {
    name: 'John Doe',
    greet: function(){
        console.log(`My name is ${this.name}`);
    }
}
obj.greet.call(obj2);
obj.greet.apply(obj2);
