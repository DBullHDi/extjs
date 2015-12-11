/**
 * Created by catalinc on 12/11/2015.
 */



'use strict';

const http = require('http');
const url = require('url');
const qs = require('querystring');
const express = require('express');
var port = process.env.PORT || 1377;
var fs = require('fs');


var app = express();

app.use(express.static(__dirname ));

app.get('/', function(req, res){
    res.sendFile(__dirname + './index.html');
});

app.listen(3000);
