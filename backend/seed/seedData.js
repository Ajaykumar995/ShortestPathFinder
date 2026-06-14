require("dotenv").config();

const mongoose = require("mongoose");

const Landmark = require("../models/Landmark");
const Road = require("../models/Road");

const landmarks = require("./landmarks");
console.log("Length =", landmarks.length);
console.log(landmarks.map(l => l.name));
const roads = require("./roads");

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");

    await Landmark.deleteMany({});
    await Road.deleteMany({});

    console.log("🗑️ Old data deleted");

    await Landmark.insertMany(landmarks);
    console.log(`✅ ${landmarks.length} landmarks inserted`);

    await Road.insertMany(roads);
    console.log(`✅ ${roads.length} roads inserted`);

    console.log("🎉 Database seeded successfully");
    console.log("Landmarks count:", landmarks.length);
    console.log("Roads count:", roads.length);
    process.exit();
  } catch (error) {
    console.error("❌ Seed Error:", error);
    process.exit(1);
  }
}

seedDatabase();