const mongoose = require("mongoose");

mongoose.connect('mongodb://0.0.0.0:27017/local').then(
  () => {
    console.log("Successfully connected to the DB");
  }
).catch((err) => {
    console.error("Connection error:", err.message);
    console.log("Hello Try again")
});

module.exports = mongoose;
