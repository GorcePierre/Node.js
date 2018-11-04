const http = require('http');
const say = require('./hello')

const server = http.createServer((req, res) => {
    res.end('Hello World\n');
});

server.listen(3000, () => {
    console.log(`Server running at port: 3000`);
});

console.log(say.hello())