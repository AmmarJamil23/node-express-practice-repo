/* 
async function always returns a promise.
async function my Func() {...}

await pauses the execution of its surrounding async
function until the promise is settled
*/

// async function hello() {
//     console.log("message");
// }


// function api() {
//     return new Promise((res, err) => {
//         setTimeout(() => {
//             console.log("weather data");
//             res(200);
//         }, 2000)
//     });
// }


// async function getWeatherData() {
//     await api(); //1st
//     await api() 
// }




function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");

          
        }, 2000);
    });
}

async function getAllData() {
    console.log("getting data 1....");
    await getData(1);
    console.log("getting data 2....");
    await getData(2);
    console.log("getting data 3....");
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);


}