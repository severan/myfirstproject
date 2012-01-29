require('http').createServer(function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end('hello\n');
}).listen(process.env.C9_PORT);