const http = require("node:http")

const server = http.createServer( (req, res) => {

    const cartoons = {
        firstname: "Spongebob",
        lastname: "SquarePants"
    };
//We need to create respponse header so that browsers know what to send
/*
The JSON.stringify(object) method converts the object into a JSON strong
because HTTP can only send text.

Its opposite JSON.parse(string) method converts string into an object
*/
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(cartoons));
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
})