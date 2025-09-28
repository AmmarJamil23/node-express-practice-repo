const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const secret_key = "secret";

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if(username === "ammar" && password === "12345") {
        const token = jwt.sign({ username}, secret_key, { expiresIn: "1h"});
        res.json({ token });
    } else {
        res.status(401).send("Invalid credentials");
    }
})

app.get("/protected", (req, res) => {
    const token = req.headers['authorization'];

    if(!token) return res.status(403).send("Token required");

    jwt.verify(token, secret_key, (err, decoded) => {
        if(err) return res.status(401).send("Invalid token");

        res.send(`Welcome ${decoded.username}, you accessed protected data!`);

    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
})