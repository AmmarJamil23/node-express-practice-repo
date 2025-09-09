// const app = require("express")();
import express from "express";

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
app.get("/", (req, res) => {
    res.send("Default Root Page")
})

app.get("/getRequest", (req, res) => {
    res.send("Hello Request send successfully");
});

app.post("/postRequest", (req, res) => {
    res.send("This is a post request buddies")
});
