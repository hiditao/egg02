let express = require("express");
let bodyParser = require("body-parser");
let app = express();
app.listen(9999);

//创建application/json解析
var jsonParser = bodyParser.json();
//创建application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({extended: false});

// 跨域处理
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

// 处理post请求，通过body-parser处理请求参数
app.post("/login",urlencodedParser, (req, res) => {
    console.log(req.query, req.body);
})

app.get("/myparams", (req, res) => {
    console.log(req.query);
})

