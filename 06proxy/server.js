let http = require("http");
let url = require("url");

http.createServer((req, res) => {
    let urlbody = url.parse(req.url);
    console.log(urlbody);

    let options = {
        host: "www.taobao.cn",
        post: 80,
        path: urlbody.pathname,
        headers: req.headers
    }
    let newreq = http.get(options, function(newres) {
        res.writeHead(newres.statusCode, newres.headers);
        newres.pipe(res);
    })
    req.pipe(newreq);

}).listen(9999);