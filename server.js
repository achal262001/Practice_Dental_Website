const express = require("express");
const app = express();
const database = require("./Database");
const Doctor = require("./models/Doctor");
const Patient = require("./models/Patient");
const doctorRoutes = require("./routes/doctorRoutes");
const patientRoutes = require("./routes/patientRoutes");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  res.send("its Home Page");
});

app.use("/doctor", doctorRoutes);
app.use("/patient", patientRoutes);

app.get("/hellow", (req, res) => {
  res.send("Randi");
});

app.listen(3000, () => console.log("server listen at 3000"));
