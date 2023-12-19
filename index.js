const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require('./db.js');

const app = express();

app.use(bodyParser.json);


app.listen(4040, () => {
    console.log("App server started at" + 4040);
});

