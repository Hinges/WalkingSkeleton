/**
 * Created by Hinge on 1/10/16.
 */
var express = require('express');
var index = require('./routes/index');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());
app.use('/', index);

module.exports = app;

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port:', port);
});