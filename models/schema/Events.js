const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = {
  id: {
    type: String,
    default: ""
  },
  building_id: {
    type: Number,
    default: null
  },
  name: {
    type: String,
    default: ""
  },
  created_at: {
    type: String,
    default: ""
  },
  updated_at: {
    type: String,
    default: ""
  },
  info: {
    type: String,
    default: ""
  },
  position: {
    floor_id: {
      type: Number,
      default: null
    },
    radius: {
      type: String,
      default: ""
    },
    georeferences: {
      lat: {
        type: String,
        default: ""
      },
      lng: {
        type: String,
        default: ""
      }
    },
    cartesians: {
      x: {
        type: String,
        default: ""
      },
      y: {
        type: String,
        default: ""
      }
    }
  },
  conversion_area: {
    floor_id: {
      type: Number,
      default: null
    },
    radius: {
      type: String,
      default: ""
    },
    georeferences: {
      lat: {
        type: String,
        default: ""
      },
      lng: {
        type: String,
        default: ""
      }
    },
    cartesians: {
      x: {
        type: String,
        default: ""
      },
      y: {
        type: String,
        default: ""
      }
    }
  },
  custom_fields: {
    key: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  }
};
