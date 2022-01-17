const mongoose = require("mongoose");

const URI =
  "mongodb+srv://usman:abcd1234@cluster0.egfoq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const dbconnection = () => {
  mongoose
    .connect(URI, { useNewUrlParser: true })
    .then(() => {
      console.log("Database connected successfully!");
    })
    .catch((error) => {
      console.log("Error connecting database:", error);
    });
};

module.exports = dbconnection;
