// const fs = require("node:fs")

// console.log("First");
// //readfile method is asynchronous and non-blocking
// /*

// */
// fs.readFile("./file.txt", "utf-8", (err, data) => {
//     console.log("File contents");
// });

// console.log("Last");
/*
Every method in node.js that has the "sync" suffix always runs on the main
thread and is blocking
*/

const crypto = require("node:crypto");

const start = Date.now();
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");


console.log("Hash:", Date.now() - start);


