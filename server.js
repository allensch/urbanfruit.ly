var express = require('express'),
    app = express.createServer();

app.get('/', function(req, res){
    res.redirect("/index.html");
});