function greet(cb) {
    console.log('inside greet function');
    cb();
}

greet(function () {
    console.log('callback');
});