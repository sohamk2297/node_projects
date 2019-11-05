var http = require("http");
var serv = http.createServer(function (req,res) {
res.writeHead(200,{'Content-Type':'text/html'});
res.write("<html><body><h2>HELLO WORLD</h2></body></html>");
res.end();
});
serv.listen(8081);
