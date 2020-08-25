let myjq = {};

myjq.getAjax = function(url, callback) {
    let xhr = new XMLHttpRequest() ||ActiveXObject("Microsoft.XMLHTTP");
    //http://localhost:9999/ajax.json
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200) {
            callback(xhr.responseText);
        }
    }
}

myjq.getJSON = function(url, callback){
    let callbackname = "myjq_" + new Date().getTime();
    console.log(callbackname);

    // 1.定义一个全局函数，等着被调用
    // window.a = function(){}
    window[callbackname] = function(data) {
        callback(data);
    }
   

    // 2.创建一个script标签，加载src
    let sc = document.createElement("script");
    // url = jsonp.json?cb=?
    // 替换url最后一个?
    let newurl = url.replace(/\?$/, callbackname);
    console.log(newurl); //jsonp.json?cb=myjq_1598335110498
    sc.src = newurl; //myjq_1598335110498({name: "jack"})
    document.body.appendChild(sc);
}