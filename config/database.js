const mongoose = require("mongoose");

const environments = require("./environments");

const MONGO_URI = environments.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
  } catch (err) {
    console.error(`Database error: ${err}`);
    process.exit(1);
  }
};

connectDB();
