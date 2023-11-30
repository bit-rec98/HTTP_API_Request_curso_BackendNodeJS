const http = require('http'); //HTTP requests can be made from here

const hostname = '127.0.0.1'; //* '127.0.0.1' === 'localhost'
const port = 3000;

const server = http.createServer((req, res) => { //Server creation
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`); //Server execution
});