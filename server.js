const http = require('http')
const {parse} = require('querystring')
const hostname = '127.0.0.1'
const port = 3000


//bai 8 
const server = http.createServer((req, res) => {
    
    if (req.url == "/hello" && req.method == "POST" && req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        body = []
        req.on('data', function (chunk) {
            body += chunk
        })

        req.on('end', function() {
            postBody = parse(body);

        
            name = postBody.name
            res.statusCode = 200;
            
        
            res.end(`Hello ${name}`);
         
    })
    } else if (req.url == "/hello" && req.method == "POST" && (req.headers['content-type'] === 'application/json' || req.headers['content-type'] === 'text/plain')) {
    
    
    body = []
    req.on('data', function (chunk) {
        body += chunk
    })

    req.on('end', function() {
        postBody = JSON.parse(body);

        
        name = postBody.name
        res.statusCode = 200;
        
        
        res.end(`Hello ${name}`);
        
        
    })
    }

    //Bai 9

    // if(req.headers["x-access-token"] == "nextsolution") {
    //     res.statusCode = 200;
    //     res.end('Welcome')
    // } else {
    //     res.statusCode = 404;
    //     res.end('acceess denied')
    // }

})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})






