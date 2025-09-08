const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
//req.method GET POST PUT DELETE
        if(req.url === "/" ){
            res.writeHead(200, {"content-type": "text/plain"});
            res.end("Home page");
        }
        else if (req.url === "/about"){
            res.writeHead(200, {"content-type": "text/plain"});
            res.end("About page");
        }
        else if(req.url === "/api"){
            res.writeHead(200, {"content-type": "application/json"});
            res.end(JSON.stringify({
                firstName: "Spongebob",
                lastName: "Squarepants"
            }))
        } else {
            res.writeHead(404);
            res.end("PAge not found");
        }
});

server.listen(3000, () => {
    console.log("Server running on port 3000")
})