let http = require('http'),
    fs = require('fs'),
    path = require('path');


http.createServer((req, res) => {
    res.writeHead(200);

    setInterval(() => {
        res.write('Dog is running');
        res.end();
    }, 5000);
}).listen(3000);

// const manju = path.join(__dirname, 'manju.txt');
// const toladinni = path.join(__dirname, 'toladinni.txt');

// //blocking code
// let content = fs.readFileSync(manju, 'utf8');
// console.log(content);

// //non-blocking code
// fs.readFile(manju, 'utf8', (err, data) => {
//     if (err)
//         throw err;
//     console.log(data);
// });
// fs.readFile(toladinni, 'utf8', (err, data) => {
//     if (err)
//         throw err;
//     console.log(data);
// });