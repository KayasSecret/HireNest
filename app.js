const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8080;

const MONGO_URL = 'mongodb://127.0.0.1:27017/Hire-Nest'

main().then(() => {
    console.log("connected to DB")
})
.catch((err) => {
    console.log(err)
})

async function main() {
   await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
    res.send("Server is working!");
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
