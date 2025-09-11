/*

*/

const fs = require("fs");
fs.readFile(__filename, () => {
    console.log("This is readFile 1");
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