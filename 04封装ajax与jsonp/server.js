let http = require("http");
let url = require("url");
let querystring = require("querystring");
let fs = require("fs");

http.createServer((req, res) => {
    
    let urlbody = url.parse(req.url);
    
    if(urlbody.pathname == "/ajax.json") {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.end("100");
    }

    if(urlbody.pathname == "/jsonp.json") {
        let querybody = querystring.parse(urlbody.query);
        res.end(`${querybody.cb}({name: "Jack"})`);
    }
}).listen(9999);
