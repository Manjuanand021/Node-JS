let greeting = require('./greetings.json');
let greet = function(){
    console.log(greeting.en);
}
module.exports = greet;