const express = require("express");
const config = require("config");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

app.use(express.json({ extended: true }));

if (process.env.NODE_ENV === "production") {
}

const PORT = config.get("port") || 5000;

async function start() {
  try {
    // await mongoose.connect(config.get("monoUri"), {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true
    // });
    app.listen(PORT, () => console.log(`App started on port ${PORT}...`));
  } catch (err) {
    console.log("Error: ", err);
    process.exit(1);
  }
}

start();
