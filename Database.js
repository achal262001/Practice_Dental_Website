const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test");

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected");
});
db.on("disconnected", () => console.log("disconnect"));
db.on("error", (err) => console.log("gor error", err));

module.exports = db;
