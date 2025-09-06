/*
A protocol that ddefines a format for clients and servers to speak
with each other.
The client sends an HTTP request and the server responds with an 
HTTP response.
The HTTP module allows creation of web servers that can transfer data
over HTTP.
*/
const http = require("node:http")

const server = http.createServer( (req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Server had been Created!")
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
})


