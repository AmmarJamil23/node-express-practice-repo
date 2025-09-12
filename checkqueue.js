/*
Check queue callbacks are executed after microtaskqueue callbacks, time queue
callbacks and IO callbacks.
nextTick => promise => setTimeout => readFile => inner setImmediate
*/
const fs = require("fs");
fs.readFile(__filename, () => {
    console.log("This is readFile 1");
    setImmediate(() => {
        console.log("This is inner setImmediate inside readFile");
    });
    process.nextTick(() => {
        console.log("This is inner process nexttick inside readFile");
    })
    Promise.resolve().then(() => {
        console.log("THis is inner Promise.resolve inside readFile");
    })
});

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