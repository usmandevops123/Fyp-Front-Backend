const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const dbconnection = require("./dbconnection");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoute = require("./routes/user.routes");
app.use("/user", userRoute);

const Port = process.env.Port || 4000;
app.listen(Port, () => console.log(`port listen on ${Port}`));

dbconnection();
