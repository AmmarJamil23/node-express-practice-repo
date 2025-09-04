/*
The file system (fs) module allows you to work with the file system on
your computer.
*/ 
const fs = require("node:fs");

console.log("First");

const fileContents = fs.readFileSync("./file.txt", "utf-8")
console.log(fileContents);

console.log("Second");

fs.readFile("./file.txt", "utf-8", (error, data) => {
    if(error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

console.log("third");


fs.writeFileSync("./greet.txt", "Hello Again");

fs.writeFile("./greet.txt", " Hello 3rd Time", {flag: "a"}, (err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log("File written");
    }
})