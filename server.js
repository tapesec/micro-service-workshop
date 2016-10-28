var express = require('express');

var app = express();

var resultHistory = {};

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json({}));



app.listen(3000, function() {
    console.log('server listen 3000');
});

app.get('/', function(req, res, next) {
    res.send("<ul>"+
                "<li>GET  /score => retourne la liste des scores des parties jouées<li>" +
                "<li>GET  /score/:id => retourne le score de la partie (id)</li>"+
                "<li>POST /score <pre>{ id: '<id>', score: '<object>' }</pre></li>"+
            "</ul>");
})

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
