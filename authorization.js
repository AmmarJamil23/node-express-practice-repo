const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const secretKey = "secret"; 
let users = []; 

app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });

    res.json({ message: "User registered successfully" });
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ username }, secretKey, { expiresIn: "1m" }); 
    res.json({ token });
});

app.get("/protected", (req, res) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(403).json({ message: "Token required" });

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) return res.status(401).json({ message: "Invalid or expired token" });

        res.json({ message: `Welcome ${decoded.username}, you accessed protected data!` });
    });
});

app.listen(3000, () => console.log("Server running on 3000"));
