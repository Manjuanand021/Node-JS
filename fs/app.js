var fs = require('fs');
// var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
// console.log(greet);

// var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function (err, data) {
//     if (err)
//         console.log(err);
//     else
//         console.log('file read', data);
// });
// console.log('done');

var readable = fs.createReadStream(__dirname + '/greet.txt', {
    encoding: 'utf8',
    highWaterMark: 32 * 1024
});
var writeable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// readable.on('data', function (chunk) {
//     console.log(chunk.length);
//     writeable.write(chunk);
// });
readable.pipe(writeable);