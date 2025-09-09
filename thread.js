const crypto = require("node:crypto");
/*
Libuv threadpool has 4 threads.
We use process.env.UV_threadpoolsize
. By increasing the thread pool size, we are able to improve
the total time takeen to run multiple calls of an asynchronous method 
like pbkdf2
*/
process.env.UV_THREADPOOL_SIZE = 16;

const maxcall = 16;

const start = Date.now()

for (let i = 0; i < maxcall; i++) {
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
        console.log(`Hash: ${i + 1}`, Date.now() - start);
    })
}

