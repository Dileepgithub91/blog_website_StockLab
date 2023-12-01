const express = require("express");
const mongoose = require("mongoose");
const authorRoute=require("./routes/author.route")
const bloggRoute=require("./routes/blogg.route")
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

mongoose
  .connect(process.env.DB_URL, {})
  .then(() => {
    console.log(`DB is connected successfully`);
  })
  .catch((error) => {
    console.log(`DB Connection failed ${error}`);
  });

app.use("/api/v1/author",authorRoute);
app.use("/api/v1/blogg",bloggRoute)
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
