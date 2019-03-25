const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = {
  msgId: {
    type: String,
    default: ""
  },
  notiName: {
    type: String,
    default: ""
  },
  contentId: {
    type: String,
    default: ""
  },
  notiMessageType: {
    type: String,
    default: ""
  },
  eventId: [
    {
      type: String,
      required: true
    }
  ],
  headlineThumb: {
    en: {
      type: String,
      default: ""
    },
    th: {
      type: String,
      default: ""
    },
    cn: {
      type: String,
      default: ""
    }
  },
  descThumb: {
    en: {
      type: String,
      default: ""
    },
    th: {
      type: String,
      default: ""
    },
    cn: {
      type: String,
      default: ""
    }
  },
  imageThumb: {
    type: String,
    default: ""
  },
  images: {
    type: String,
    default: ""
  },
  notiGroup: {
    type: String,
    default: ""
  },
  notiView: {
    type: String,
    default: ""
  },
  sendNotiType: {
    type: String,
    default: ""
  },
  notiType: {
    type: String,
    default: ""
  },
  broadcaster: {
    type: String,
    default: ""
  },
  createBy: {
    type: String,
    default: ""
  },
  status: {
    type: String,
    default: ""
  },
  statusPublish: {
    type: String,
    default: ""
  },
  publishStart: {
    type: String,
    default: ""
  },
  publishEnd: {
    type: String,
    default: ""
  },
  publishFlag: {
    type: String,
    default: ""
  },
  dateCreated: {
    type: String,
    default: ""
  },
  dateUpdated: {
    type: String,
    default: ""
  }
};
