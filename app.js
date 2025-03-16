const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Server is working!");
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
