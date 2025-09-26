const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/setcookie', (req, res) => {
    res.cookie("username", "ammars", {
        maxAge: 10000,
        httpOnly:true
    });
    res.send("Cookie has been set");
});

app.get('/getcookie', (req, res) => {
    res.send(req.cookies);
})

app.listen(3000, () => {
    console.log('Server running on 3000 port');
});