let http = require("http");
let url = require("url");
let querystring = require("querystring");

http.createServer((req, res) => {
    let urlobj = url.parse(req.url);
    let queryobj = querystring.parse(urlobj.query);
    if(urlobj.pathname == "/test.jsonp") {
        // res.end("var data = {age: 18}");
        res.end(`${queryobj.cb}({sex: "男"})`)
    }
}).listen(9999);