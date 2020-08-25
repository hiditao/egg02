let express = require("express");
let app = express();
app.listen(9999);

// 静态资源托管
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.json({name: "jack"});
})

app.get("/test.json", (req, res) => {
    res.status(200).json({name: "xxx"});
    // res.end(JSON.stringify({"name": "xxx"}));
})


// let server = http.createServer((req, res) => {
    // let path = url.parse(req.url).pathname
    // if(path == "/"){}
// })
// server.listen(9999)