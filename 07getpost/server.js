let http = require("http");
let url = require("url")
let querystring = require("querystring");

http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let urlbody = url.parse(req.url);

    
    if(urlbody.pathname == "/index") {
        console.log(req)
    }

    // req.url: /myparams?name=aa&pwd=123
    if(urlbody.pathname == "/myparams") {
        console.log("11111", urlbody);
        let querybody = querystring.parse(urlbody.query);
        if(querybody.name == "aa" && querybody.pwd=="123") {
            res.end("ok");
        }
    }

    if(urlbody.pathname == "/three") {
        console.log("22222", urlbody);
    }

    if(urlbody.pathname == "/home") {
        res.end("ok");
    }

    if(urlbody.pathname == "/login") {
        console.log("333333", req);
    }
}).listen("9999");