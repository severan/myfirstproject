require('http').createServer(function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end('hello 2\n');
}).listen(process.env.C9_PORT);
