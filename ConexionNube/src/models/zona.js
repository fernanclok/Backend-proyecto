const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema(
  {
    id_zona: {
        type: Number,
        required: true,
    },
    cuarto: {
        type: Number,
        required: true,
    },
    sensores: {
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
