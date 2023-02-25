require("dotenv").config();

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlparser: true })
  .then(() => console.log("connected to mongod"))
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});
