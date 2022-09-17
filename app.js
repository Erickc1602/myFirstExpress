const http = require('http');

const hostname = '127.0.0.1';
const port = 30100;

const server = http.createServer((req, res) =>{
console.log('Our Request ', req);
console.log('Our Response ', res);
    res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World! Welcome to my Node App ');
});

server.listen(port, hostname, () => {
    console.log(`YO JOE! Coming in hot at http://${hostname}:${port}`)

});