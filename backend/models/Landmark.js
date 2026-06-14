const mongoose = require("mongoose");

const landmarkSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "MONUMENT",
        "IT_HUB",
        "TRANSPORT",
        "MARKET",
        "EDUCATION",
        "RECREATION",
        "RESIDENTIAL",
        "THEATER",
        "HOSPITAL",
      ],
      required: true,
    },

    coordinates: {
      latitude: {
        type: Number,
        required: true,
      },

      longitude: {
        type: Number,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Landmark", landmarkSchema);