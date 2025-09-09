const https = require("node:https");
// process.env.UV_THREADPOOL_SIZE = 16;
/*
https.request is a network input/output operation
and not CPU bound operation

*/
const maxcall = 10;
const start = Date.now();

for (let i = 0; i < maxcall; i++) {
    const req = https.request("https://jsonplaceholder.typicode.com/posts/1", (res) => {
        res.on("data", () => {}); // consume data
        res.on("end", () => {
            console.log(`Request: ${i + 1}`, Date.now() - start);
        });
    });

    req.on("error", (err) => {
        console.error("Request error:", err);
    });

    req.end();
}