var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('<h1>Hellooooos Mr.Manjuanand</h1>');
});
app.post('/', function (req, res) {
    console.log(req.body);
    res.send('Data posted successfully');
});
app.listen(3000, function () {
    console.log('App has started...');
});