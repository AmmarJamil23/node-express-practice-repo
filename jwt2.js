const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const secretKey = "mysecretkey";

app.post('/login', (req, res) => {
    const { username } = req.body;   
    const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });

    console.log("Generated Token:", token);  
    res.json({ token });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
