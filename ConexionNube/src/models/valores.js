const mongoose = require("mongoose");

const ValoresSchema = mongoose.Schema(
  {
    _id: {
        type: Number,
        required: true,
    },
    Zona: {
        type: Number,
        required: true,
    },
    T: {
        type: Number,
        required: true,
    },
    RH: {
        type: Number,
        required: true,
    },
    HG: {
      type: Number,
      required: true,
    }
  },
  {
    versionKey: false,
    collection: "valores",
  }
);

module.exports = mongoose.model("valores", ValoresSchema);
