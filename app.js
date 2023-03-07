var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use('/essets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


app.use('/', function(req, res, nex) {
    console.log('Request Url:' + req.url);
    nex();
});

app.get('/', function(req, res) {
    res.render('index');
});
app.get('/person/:id', function(req, res) {
    res.render('person', { ID: req.params.id });
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);