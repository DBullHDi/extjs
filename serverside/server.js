/**
 * Created by catalinc on 12/11/2015.
 */


'use strict';

const http = require('http');
const url = require('url');
const qs = require('querystring');
var port = process.env.PORT || 1377;
var fs = require('fs');


let routes = {
    'GET': {
        '/': function (req, res) {
            res.writeHead(200, {'Content-type': 'text/html'});

            res.sendfile('../index.html');

            //fs.createReadStream('../index.html').pipe(res);

            //fs.readFile("/index.html", function(err, data){
            //    res.writeHead(200, {'Content-Type': 'text/html'});
            //    res.write(data);
            //    res.end();
            //});
            res.end();
        }

    },
    'NA': (req, res)=> {
        res.writeHead(404);
        res.end('content not found');
    }
    };


function router(req, res){

    let baseURI = url.parse(req.url, true);
    let resolveRoute = routes[req.method][baseURI.pathname];
    console.log("Resolve route: method " ,req.method, " + ",resolveRoute);
    console.log("Base URI: ",baseURI);

    if(resolveRoute != undefined ){
        req.queryParams = baseURI.query;
        resolveRoute(req,res);
    }else{
        routes['NA'](req,res);
    }
}

http.createServer(router).listen(3000, ()=>{
    console.log('server running 3000');

});