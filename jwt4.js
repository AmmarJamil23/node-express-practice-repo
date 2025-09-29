const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const secretKey = "libraryStamp";  

app.post('/login', (req, res) => {
    const { username } = req.body;

    const token = jwt.sign({ username }, secretKey, { expiresIn: "1m" }); 

    console.log("Generated Token:", token); 
    res.json({ token }); 
});


app.post("/decode", (req, res) => {
    const { token } = req.body;

    const decoded = jwt.decode(token);

    if (decoded.iat) {
        decoded.iat = new Date(decoded.iat * 1000).toLocaleString();
    }
    if (decoded.exp) {
        decoded.exp = new Date(decoded.exp * 1000).toLocaleString();
    }

    res.json(decoded);
});


app.listen(3000, () => console.log("Server running..."));
