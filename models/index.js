const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {
  NotifyTargetSchema,
  NotifyBroadcastSchema,
  NotifyPOISchema,
  EventSchema
} = require("./schema");

let NotifyTargets = new Schema(NotifyTargetSchema);
let NotifyBroadcasts = new Schema(NotifyBroadcastSchema);
let NotifyPOIs = new Schema(NotifyPOISchema);

mongoose.model("NotifyTargets", NotifyTargets);
mongoose.model("NotifyBroadcasts", NotifyBroadcasts);
mongoose.model("NotifyPOIs", NotifyPOIs);
mongoose.model("Events", EventSchema);

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
