let http = require("http");
let url = require("url");
let fs = require("fs");

http.createServer((req, res) => {
    let urlbody = url.parse(req.url);

    if(urlbody.pathname == "/") {
        fs.readFile("./index.html", (err, data) => {
            if(err) console.log(err)
            res.end(data);
        })
    }

    if(urlbody.pathname == "/1.jpg") {
        fs.readFile("./1.jpg", (err, data) => {
            res.end(data);
        })
    }

    
}).listen(9999)