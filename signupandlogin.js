const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

const users = [];
const saltRounds = 12;

app.get('/', (req, res) => {
    res.send("Re-invent the wheel");
})

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    const passwordHash = await bcrypt.hash(password, saltRounds);

    users.push({ username, password: passwordHash });

    res.json({ message: "User registered successfully" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});