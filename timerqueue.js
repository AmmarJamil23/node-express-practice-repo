/* Callbacks in the mrcirtask queues are executed before
the callbacks in the ready queue.
Callbacks in microtask queue are executed in between the execution
of callbacks in the timer queue.
Timer queeu callbacks are executed in FIFO order.
The order is nextTick -> promise -> timer
*/
setTimeout(() => {
    console.log("This is a setTimeout function 1!");
},1000);

setTimeout(() => {
    console.log("This is a setTimeout function 2!");
},500);

setTimeout(() => {
    console.log("This is a setTimeout function 3!");
},0);

