const mongoose = require("mongoose");

async function connectToDB(params) {
  try {
    await mongoose
      .connect(
        "mongodb+srv://amanFin:aETw6DyEmgbiKOhB@cluster0.yebpsqk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => {
        console.log("Database connection established");
      })
      .catch((err) => {
        console.log("An error occured while connecting to database", err);
      });
  } catch (err) {
    console.log("error occured while connecting to db", err);
  }
}

module.exports = connectToDB;
