const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie("username", "ammar", {
    httpOnly: true,

    maxAge: 1000 * 60 * 5 ,
  });
  res.send("Normal cookie set");
});

app.listen(3000, () => {
    console.log("Server running")
})
