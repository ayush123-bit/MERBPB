
const mongoose = require("mongoose");
mongoose.connect("Your_Mongo_URI")
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });
