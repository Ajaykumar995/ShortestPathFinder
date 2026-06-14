const mongoose = require("mongoose");

const roadSchema = new mongoose.Schema(
  {
    source: {
      type: String,
      required: true,
    },

    destination: {
      type: String,
      required: true,
    },

    distance: {
      type: Number,
      required: true,
    },

    averageTravelTime: {
      type: Number,
      required: true,
    },

    trafficLevel: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Road", roadSchema);