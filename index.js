require('dotenv').config();
const express = require("express");
const app = express();

const port = 4000


app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get("/twitter", (req, res) => {
    res.send("You are on twitter backend");
});

app.listen(process.env.PORT, () => {
    console.log(`App is listening on port: ${process.env.port}`);
});
