const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = {
  targetId: {
    type: String,
    required: true
  },
  targetName: {
    type: String,
    required: true
  },
  gender: [
    {
      type: String,
      required: true
    }
  ],
  ageFrom: {
    type: String,
    default: ""
  },
  ageTo: {
    type: String,
    default: ""
  },
  interest: [
    {
      interestId: {
        type: String,
        required: true
      },
      subInterestId: [
        {
          type: String,
          required: true
        }
      ]
    }
  ],
  // subInterest: [
  //   {
  //     type: String,
  //     required: true
  //   }
  // ],
  vizCardType: [
    {
      type: String,
      required: true
    }
  ],
  dateCreated: {
    type: Date,
    default: new Date()
  }
};
