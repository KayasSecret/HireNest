const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Health Check Route
app.get("/", (req, res) => {
  res.send("✅ Server is working fine!");
})

app.listen(8080, () => {
    console.log("server is listening to port 8080")
})