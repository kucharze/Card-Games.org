var express = require('express');
const path=require('path');
//const ws=require('WebSocket');
var app = express();
var port = process.env.PORT || 3000;

app.get('/',function(req,res){
   //response.send("Welcome");
    //response.sendFile('index.html');
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port);