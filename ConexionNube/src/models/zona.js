const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema(
  {
    _id: {
        type: Number,
        required: true,
    },
    Cuarto: {
        type: Number,
        required: true,
    },
    Sensores: {
        type: Number,
        required: true,
    },
  },
  {
    versionKey: false,
    collection: "zona",
  }
);

module.exports = mongoose.model("zona", AdminSchema);
