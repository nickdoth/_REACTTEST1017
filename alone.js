var express = require('express');
var app = express();

app.use('', require('.')());

app.listen(8081);