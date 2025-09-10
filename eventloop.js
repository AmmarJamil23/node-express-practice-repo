/*
Synchronous code execution in Nodde.js
pus and pop call stacks 
*/
// console.log("First");
// console.log("Second");
// console.log("Third");

/*
Asynchhronous code execution in node .js

Event loop is a C program and is part of libuv
It is a design pattern that orchestrates or co-ordinates
the execution of synchronous and asynchronous code in Node.js.

Event Loop -EXecution Order:
1) Any callbacks in the microtask queues are executed . First in the
nextTick queue and then in the promise queue.
2) All callbacks within the timer queue are executed.
3)Callbacks in the microtask queue if present are executed. Again first
nextTick then promise queue.
4) All callbacks within the I/0 queue are executed.
5)Callbacks in the microtask queue if present are executed. Again first
nextTick then promise queue.
6)All callbacks in the check queue are executed.
7)Callbacks in the microtask queue if present are executed. Again first
nextTick then promise queue.
8) All callbacks in the close queue are executed.
9) For one final time Callbacks in the microtask queue if present are executed. Again first
nextTick then promise queue.

*/
const fs = require("node:fs");

console.log("First");
fs.readFile(__filename, () => {
    console.log("Second");
})
console.log("Third")