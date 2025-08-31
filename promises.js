/*Promise is for "eventual" completion of task. It is an object in JS.
It is a solution to callback hell.

Following is its syntax:
let promise = new Promise ((resolve, reject) => {...})

"resolve" and "reject" are callbacks providd by JS

There are three states of promises:
1) Pending
2) Fulfilled
3) Rejected
*/
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("try again!")

// });

// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise fulfilled", res)
// })


// promise.catch((err) => {
//     console.log("rejected", err)
// })





// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");

//             if (getNextData) {
//                 getNextData();
//             }
//         }, 7000);
//     });
// }
/*



*/

function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data 1");
            resolve("Success");
        }, 4000)

    });
}


function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data 2");
            resolve("Success");
        }, 4000)

    });
}

console.log("fetching data...")
let p1 = asyncFunc1();

p1.then((res) => {
    console.log(res);
    
    console.log("fetching data2...")
    let p2 = asyncFunc2();

    p2.then((res) => {
    console.log(res);
});
});





