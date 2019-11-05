var http = require("http");
var url = require('url');
var fs = require('fs');
var serv = http.createServer(function (req, res) {
    fs.readFile("index.html", function (err,data){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        if(data)
        {
            var q = url.parse(req.url, true).query;
            var txt = q.year + " " + q.month;
            res.end(data);
        }
        else
        {
            res.end(err.name);
        }
    });

});
serv.listen(8081);
