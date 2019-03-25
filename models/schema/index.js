const NotifyTargets = require("./NotifyTargets");
const NotifyBroadcasts = require("./NotifyBroadcasts");
const NotifyPOI = require("./NotifyPOI");
const Events = require("./Events");
module.exports = {
  NotifyTargetSchema: NotifyTargets,
  NotifyBroadcastSchema: NotifyBroadcasts,
  NotifyPOISchema: NotifyPOI,
  EventSchema: Events
};
