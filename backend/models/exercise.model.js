const mongoose = require("mongoose");
const exeriseSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamp: true,
  }
);

const Exercise = mongoose.model("Exercise", exeriseSchema);

module.exports = Exercise;
