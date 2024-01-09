require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT;
const app = express();

const urlroutes = require("./routes/url");

mongoose
  .connect("mongodb://127.0.0.1:27017/urlshortener")
  .then(() => {
    console.log("mongoDB connected");
  })
  .catch((error) => {
    console.log(error);
  });
app.use("admin/", urlroutes);

app.listen(PORT, () => {
  console.log(`server started on PORT:${PORT}`);
});
