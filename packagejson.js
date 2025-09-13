/*
package.json is npm configuration file
*/
const upperCase = require("upper-case").upperCase;
function greet(name) {
    console.log(upperCase(`Hello ${name}, welcome`));
}

greet("aMmar jAMil");
module.exports = greet;