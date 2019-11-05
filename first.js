var http = require("http");
var url = require('url');
var serv = http.createServer(function (req,res) {
res.writeHead(200,{'Content-Type':'text/html'});
res.write("<html><body><h2>HELLO WORLD</h2></body></html>");
var q = url.parse(req.url,true).query;
var txt = q.year + " " + q.month;
res.end(txt);
});
serv.listen(8081);
