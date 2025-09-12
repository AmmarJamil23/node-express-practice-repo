const fs = require("fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
    console.log("This is from readable stream close event callback");
})

process.nextTick(() => {
    console.log("THis is process.nextTick 1");
})

Promise.resolve().then(() => {
    console.log("This is promise.resolve 1");
})

setTimeout(() => {
    console.log("This is setTimeout 1");
},0);

setImmediate(() => {
   console.log("This is setImmediate 1");
})