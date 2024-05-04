const mongoose = require("mongoose");
require("dotenv").config();
const LocalURL = process.env.DB_LOCAL_URL;
const GlobalURL = process.env.DB_GLOBAL_URL;
mongoose.connect(GlobalURL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected");
});
db.on("disconnected", () => console.log("disconnect"));
db.on("error", (err) => console.log("gor error", err));

module.exports = db;
