const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { NotifiesSchema } = require("./schema");

let Notifies = new Schema(NotifiesSchema);

mongoose.model("Notifies", Notifies);

// Mongoose connection to MongoDB
mongoose.set("useCreateIndex", true);
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);

console.log("DB_HOST : ", process.env.DB_HOST);
mongoose.connect(
  process.env.DB_HOST + ":" + process.env.DB_PORT + "/" + process.env.DB_NAME,
  { user: process.env.DB_USER, pass: process.env.DB_PASS },
  function(error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Connect Database Success..");
    }
  }
);
