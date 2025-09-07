const http = require("node:http")
const fs = require("node:fs")
const server = http.createServer( (req, res) => {
   const name = "Username";
   let html = fs.readFileSync("./index.html", "utf-8");
   html = html.replace("{{name}}", name);
    res.writeHead(200, {"Content-Type": "text/html"});
   // fs.createReadStream(__dirname + "/index.html").pipe(res);
    res.end(html);
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
})