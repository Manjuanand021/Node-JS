const http = require('http'),
    path = require('path'),
    url = require('url'),
    fs = require('fs');

//Array of mimi-types
const mimiType = {
    html: 'text/html',
    jpeg: 'image/jpeg',
    jpg: 'image/jpg',
    js: 'text/javascript',
    css: 'text/css'
};

http.createServer((req, res) => {
    const uri = url.parse(req.url).path;
    const fileName = path.join(__dirname, uri);
    const extn = path.extname(fileName).substring(1);
    if (extn !== 'ico') {
        res.writeHead(200, {
            'Content-type': mimiType[extn]
        });
        fs.createReadStream(fileName).pipe(res);
    } else {
        res.writeHead(403);
        res.end();
    }
}).listen(3000);