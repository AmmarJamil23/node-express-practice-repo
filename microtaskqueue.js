/*
Microtask Queues.
1) All user written synchronous javascript code takes priority
overasync code that the runtime would like to eventually execute.
2) All callbacks in nextTick queue are executed before callbacks
in promise queue.
Node.js is single-threaded for JavaScript execution, meaning there's only 
one call stack.
*/
// console.log("COnsole log 1");
// process.nextTick(() => {
//     console.log("This is prcoess.next 1");
// })
// console.log("Console log 2")

Promise.resolve().then(() => {
    console.log("This is promise.resolve 1");
});

process.nextTick(() => {
    console.log("This is process.nextTick 1");
});