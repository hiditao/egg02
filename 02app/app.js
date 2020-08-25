let http = require("http");
let url = require("url");
let querystring = require("querystring"); //解析参数

http.createServer((req, res) => {

    let path = url.parse(req.url).pathname;
    let querybody = url.parse(req.url).query; //callback=xxx

    if(path == "/test.jsonp") {
        let callbackname = querystring.parse(querybody).callback;
        console.log(callbackname); //xxx
        res.end(`${callbackname}({name: "500"})`)
    }

}).listen(9999);