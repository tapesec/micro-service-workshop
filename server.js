var express = require('express');

var app = express();

var resultHistory = {};

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.user(bodyParser.json({}));



app.listen(3010, function() {
    console.log('server listen 1010');
});


app.post('/score', function(req, res, next) {
    resultHistory[req.body.id] = req.body;
    res.status(201).end();
});

app.get('/score', function(req, res, next) {
    res.status(200).send(resultHistory);
});

app.get('/score/:id', function(req, res, next) {
    res.status(200).send(resultHistory[req.params.id]);
});
