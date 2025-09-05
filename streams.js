/*
A stream is a sequence of data that is being moved from one point
to another over time.
For example a stream of data being transferred from one file to another within the same
computer.
TYPES:
1) Readable streams
2) Writeable streams
3) Duplex streams
4) Transform streams
*/
const fs = require("node:fs")

const readableStream = fs.createReadStream("./file.txt", {
    encoding:"utf-8",
    highWaterMark:2,
});

const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunk) => {
    console.log(chunk);
    writeableStream.write(chunk);

});